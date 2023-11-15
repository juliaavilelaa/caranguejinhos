function onFormSubmit(e) {
    var sheet = SpreadsheetApp.getActiveSheet();
    var lastRow = sheet.getLastRow();
    var lastColumn = sheet.getLastColumn();
  
    var sourceRange = sheet.getRange(lastRow, 1, 1, lastColumn);
  
    var firstEmptyRow = 1;
    while (sheet.getRange(firstEmptyRow, 1).getValue() != "") {
      firstEmptyRow++;
    }

    if (firstEmptyRow < 3) {
      sourceRange.clear();
    } else {
      sourceRange.copyTo(sheet.getRange(firstEmptyRow, 1));
  
      sheet.deleteRow(lastRow);
    }
  }