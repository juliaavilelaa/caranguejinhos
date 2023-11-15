function apagarDadosEManterLinhas1e2() {
    var nomeAba = "Respostas ao Formulário 1";
    var planilha = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeAba);
  
    if (planilha) {
      var dados = planilha.getDataRange().getValues();
      var primeiraLinha = dados[0];
      var segundaLinha = dados[1];
  
      planilha.clearContents();
  
      planilha.getRange(1, 1, 2, primeiraLinha.length).setValues([primeiraLinha, segundaLinha]);
    } else {
      Logger.log("A aba não foi encontrada.");
    }
  }