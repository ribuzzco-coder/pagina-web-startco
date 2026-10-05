# Google Sheets para formularios de ruleta

Esta integración recibe únicamente los registros de Nuna Amautta.
Bionda y Mora no envía datos a esta hoja; su ruleta funciona sin guardarlos.

Sheet destino:

```txt
https://docs.google.com/spreadsheets/d/1XPmeq-_Sh9tMOFJO2cUuXdh8QAiprSMa08SJQso1yWw/edit
```

La hoja ya debe tener estos encabezados en la fila 1:

```txt
Nombre | Correo | Celular | Cumpleaños | Origen | Producto comprado o de interés | Premio | Código | Relación con Nuna | Cupón Shopify
```

La URL del spreadsheet no se usa directamente como variable de entorno. Primero
hay que publicar un Google Apps Script como Web App y usar esa URL publicada en
`GOOGLE_SHEETS_WEBHOOK_URL`.

## Apps Script

En el Google Sheet abre `Extensiones > Apps Script` y pega este codigo:

```js
const SPREADSHEET_ID = "1XPmeq-_Sh9tMOFJO2cUuXdh8QAiprSMa08SJQso1yWw";
const SHEET_NAME = "Hoja 1";

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(`No existe la hoja ${SHEET_NAME}.`);
  }

  const data = JSON.parse(e.postData.contents || "{}");
  if (data.brand !== "nunaamautta") {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "Marca no permitida" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
  // El código estable evita registrar de nuevo el mismo premio de Nuna.
  if (data.validationCode && sheet.getLastRow() > 1) {
    const codes = sheet.getRange(2, 8, sheet.getLastRow() - 1, 1).getValues();
    if (codes.some(row => row[0] === data.validationCode)) {
      return ContentService.createTextOutput(JSON.stringify({ ok: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  const cell = value => /^[=+@-]/.test(String(value || "")) ? "'" + value : value || "";
  sheet.appendRow([
    data.name || "",
    data.email || "",
    data.phone || "",
    data.birthday || "",
    data.brandLabel || data.brand || "",
    data.productInterest || "",
    data.prize || "",
    data.validationCode || "",
    data.purchaseStatus === "purchased" ? "Ya compró" : "Persona interesada",
    data.shopifyCode || "",
  ].map(cell));
  } finally {
    lock.releaseLock();
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Publicar

1. Click en `Implementar > Nueva implementacion`.
2. Tipo: `Aplicacion web`.
3. Ejecutar como: `Yo`.
4. Quien tiene acceso: `Cualquier usuario`.
5. Copia la URL que termina en `/exec`.

## Variable de entorno

Agrega esa URL publicada al proyecto:

```txt
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
```

Despues reinicia el servidor o redeploya el proyecto.

## Actualizar una implementación existente

Añade las columnas F, G, H, I y J con los encabezados nuevos, actualiza `doPost` y
publica una nueva versión de la implementación existente para conservar la URL.
El formulario envía `productInterest`, `prize`, `validationCode` y `purchaseStatus`.
La columna Código mantiene la referencia individual para evitar duplicados.
La columna Cupón Shopify registra el código de descuento existente en la tienda.
La ruleta usa los códigos existentes `RULETANUNA10`, `RULETANUNA15` y
`RULETANUNA20` para los descuentos del 10%, 15% y 20% sobre el pedido.
El botón abre `/discount/CODIGO` en Shopify para aplicar el cupón al pedido.
Los límites de uso, elegibilidad y acumulación se gestionan en Shopify.
La asignación permanece estable por correo mientras no cambie
`SENSITIVE_FIELD_ENCRYPTION_KEY`.
