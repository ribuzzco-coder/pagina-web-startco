const SPREADSHEET_ID = "1m_qaB5qF6h0iYXBjmFNyJGxGsLeKoRRkeeylEF_Xv7k";
const SHEET_NAME = "Registros";

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  if (data.brand !== "biondaymora" || data.consent !== true || !data.validationCode) {
    return jsonResponse({ ok: false, error: "Registro no permitido" });
  }
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error("No existe la hoja " + SHEET_NAME);
    const rows = sheet.getLastRow();
    if (rows > 1 && sheet.getRange(2, 8, rows - 1, 1).getValues().some(row => row[0] === data.validationCode)) {
      return jsonResponse({ ok: true, duplicate: true });
    }
    const cell = value => {
      const text = String(value == null ? "" : value);
      return /^\s*[=+@-]/.test(text) ? "'" + text : text;
    };
    sheet.appendRow([
      data.name, data.email, data.phone, data.birthday, "Bionda y Mora",
      data.productInterest, data.prize, data.validationCode,
      data.purchaseStatus === "purchased" ? "Ya compró" : "Persona interesada",
      data.submittedAt,
    ].map(cell));
    return jsonResponse({ ok: true });
  } finally { lock.releaseLock(); }
}
