# Google Sheets para formularios de ruleta

Sheet destino:

```txt
https://docs.google.com/spreadsheets/d/1XPmeq-_Sh9tMOFJO2cUuXdh8QAiprSMa08SJQso1yWw/edit
```

La hoja ya debe tener estos encabezados en la fila 1:

```txt
Nombre | Correo | Celular | Cumpleaños | Origen
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

  sheet.appendRow([
    data.name || "",
    data.email || "",
    data.phone || "",
    data.birthday || "",
    data.brandLabel || data.brand || "",
  ]);

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
