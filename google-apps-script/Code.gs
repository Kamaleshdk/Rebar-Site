/**
 * Paste this into a Google Sheet's Apps Script editor (Extensions → Apps
 * Script) and deploy it as a Web App (Deploy → New deployment → Web app,
 * "Execute as: Me", "Who has access: Anyone"). Copy the resulting /exec
 * URL into VITE_FORM_ENDPOINT.
 *
 * Every enquiry submitted through the website's contact form is appended
 * as a new row here in real time — no manual export/import needed.
 */

var SHEET_NAME = 'Enquiries'
var COLUMNS = [
  'id', 'submittedAt', 'name', 'company', 'email',
  'phone', 'projectType', 'service', 'location', 'message',
]

function doPost(e) {
  var sheet = getOrCreateSheet_()
  var data = JSON.parse(e.postData.contents)

  var row = COLUMNS.map(function (col) {
    return data[col] !== undefined ? data[col] : ''
  })
  sheet.appendRow(row)

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON)
}

// Lets you sanity-check the deployed URL by opening it directly in a browser.
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Rebar site enquiries endpoint is live.' }))
    .setMimeType(ContentService.MimeType.JSON)
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS)
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold')
    sheet.setFrozenRows(1)
  }
  return sheet
}
