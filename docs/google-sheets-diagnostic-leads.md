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

  sheet.appendRow([
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
  ]);

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

Después redeploya el proyecto. No hace falta ningún otro cambio de código — el
endpoint `/api/diagnostic-request` ya envía el payload con esos mismos nombres de
campo cada vez que entra una solicitud nueva y no es duplicada.

## Probar que quedó conectado

Envía una solicitud de prueba desde `/diagnostico` (usa un correo que no hayas usado
antes, porque hay una ventana anti-duplicados de 24h) y confirma que aparece una fila
nueva en el Sheet. Si no aparece nada, revisa los logs del deploy buscando el evento
`diagnostic_sheets_sync.skipped` (variable de entorno no configurada) o
`diagnostic_sheets_sync.failed` (la URL está mal o el script no está publicado como
"Cualquier usuario").
