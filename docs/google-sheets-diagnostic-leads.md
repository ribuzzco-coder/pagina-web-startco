# Google Sheets para solicitudes de diagnóstico

La hoja debe tener estos encabezados en la fila 1, en este orden:

```txt
Fecha | ID | Nombre | Empresa | Cargo | Correo | WhatsApp | Sector | Qué vende | A quién vende | Proceso actual | Qué frena | Meta concreta | Presupuesto | Urgencia | Autoridad | Tamaño equipo | Contexto | Fit score | Ruteo | Fuente | Link admin
```

La URL del spreadsheet no se usa directamente como variable de entorno. Primero
hay que publicar un Google Apps Script como Web App y usar esa URL publicada en
`DIAGNOSTIC_SHEETS_WEBHOOK_URL`.

## Apps Script

En el Google Sheet abre `Extensiones > Apps Script` y pega este código (reemplaza
`SPREADSHEET_ID` por el ID de tu hoja, que está en la URL entre `/d/` y `/edit`):

```js
const SPREADSHEET_ID = "PEGA_AQUI_EL_ID_DE_TU_SHEET";
const SHEET_NAME = "Hoja 1";

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(`No existe la hoja ${SHEET_NAME}.`);
  }

  const data = JSON.parse(e.postData.contents || "{}");

  if (!data.id) throw new Error("La solicitud necesita un ID.");
  const values = [
    data.submittedAt || "",
    data.id || "",
    data.nombre || "",
    data.empresa || "",
    data.cargo || "",
    data.email || "",
    data.whatsapp || "",
    data.sector || "",
    data.queVende || "",
    data.aQuienVende || "",
    data.procesoActual || "",
    data.queFrena || "",
    data.metaConcreta || "",
    data.presupuesto || "",
    data.urgencia || "",
    data.autoridad || "",
    data.tamanoEquipo || "",
    data.contexto || "",
    data.fitScore ?? "",
    data.routingTier || "",
    data.source || "",
    data.adminUrl || "",
  ].map(value => typeof value === "string" && /^[=+@-]/.test(value) ? "'" + value : value);

  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const count = sheet.getLastRow() - 1;
    const existing = count > 0 && sheet.getRange(2, 2, count, 1)
      .createTextFinder(data.id).matchEntireCell(true).findNext();
    if (!existing) sheet.appendRow(values);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Publicar

1. Click en `Implementar > Nueva implementación`.
2. Tipo: `Aplicación web`.
3. Ejecutar como: `Yo`.
4. Quién tiene acceso: `Cualquier usuario`.
5. Copia la URL que termina en `/exec`.

Si ya habías publicado antes y solo cambiaste el código, usa `Implementar > Administrar
implementaciones > Editar (lápiz) > Nueva versión`, no crees una implementación nueva —
si no, la URL cambia y hay que actualizar la variable de entorno otra vez.

## Variable de entorno

Agrega esa URL publicada al proyecto (en tu hosting, no en este `.env` local):

```txt
DIAGNOSTIC_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
```

Publica primero esta versión del Apps Script y aplica la migración
`20261119120000_diagnostic_revisions_and_delivery.sql` antes de desplegar el
backend. La confirmación del formulario se emite cuando queda guardada la solicitud.
Después, el servidor intenta entregar hasta cuatro filas pendientes por solicitud.
Cada intento HTTP tiene un límite de seis segundos. Si la hoja no confirma la
recepción, la fila queda disponible para reintento cinco minutos después.

Con una sesión administrativa activa puedes hacer un `POST` a
`/api/admin/diagnostic-requests/retry-sheets` para procesar las pendientes sin
esperar otra solicitud. Devuelve `claimed` y `delivered`. Si el tráfico se
interrumpe, es necesario usar este reenvío para vaciar la cola.
La hoja reconoce el ID aunque se pierda la respuesta del primer envío. Una
corrección material del formulario recibe un ID nuevo. Las filas históricas
previas a la migración no se encolan retroactivamente.

## Probar que quedó conectado

En un entorno de prueba con la integración configurada, envía una solicitud desde
`/diagnostico`. Repite los mismos datos y confirma que aparece una única fila.
Cambia urgencia o inversión y comprueba que la nueva versión tiene otro ID.
Si falta una fila, comprueba la variable de entorno, busca
`diagnostic_sheets_sync.failed` en los logs y utiliza el reenvío administrativo.
