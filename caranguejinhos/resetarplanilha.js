function salvarPlanilhaNoDriveComLinhas1e2() {
    var nomePlanilhaOriginal = "Relatório dos Caranguejinhos";
    var nomePastaDrive = "Atas Diárias da Biblioteca";
  
    var planilhaOriginal = SpreadsheetApp.getActiveSpreadsheet();
    var pastaDrive = DriveApp.getFoldersByName(nomePastaDrive).next();
    var data = new Date();
    var nomeArquivo = "Planilha " + Utilities.formatDate(data, "GMT", "yyyy-MM-dd");
  
    var planilhaId = planilhaOriginal.getId();
    var planilhaFile = DriveApp.getFileById(planilhaId);

    var dados = planilhaOriginal.getSheets()[0].getRange("A1:" + planilhaOriginal.getSheets()[0].getMaxColumns() + "2").getValues();
  
    var novaPlanilhaFile = planilhaFile.makeCopy(nomeArquivo);
    pastaDrive.createFile(novaPlanilhaFile);
  
    var novaPlanilha = SpreadsheetApp.openById(novaPlanilhaFile.getId());
    novaPlanilha.getSheets()[0].getRange("A1:" + novaPlanilha.getSheets()[0].getMaxColumns() + "2").setValues(dados);
  }