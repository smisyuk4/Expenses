function createReportPerPeriod(chat_id) {
  list = SpreadsheetApp.openById(idSheet).getSheetByName(nameList2);
  //chat_id = '475321747';

  //поиск нижней границы диапазона
  var bottomPoint = list.getLastRow();
  var dateB = new Date(list.getRange(bottomPoint, 1).getValue()).toLocaleDateString(locale, dateOptions);   

  //поиск верхней желтой строки (<----- Значения за месяц)
  var topPoint = bottomPoint;      
    do {
      topPoint--;    
    }while(list.getRange(topPoint, 2).getBackground() !== "#ffff00")
  var dateA = new Date(list.getRange(topPoint+1, 1).getValue()).toLocaleDateString(locale, dateOptions);

  var dateLine = 'с ' + dateA + ' по ' + dateB + ' \n' + 'расходы составили:\n';

  //формирование имени ячеек диапазона и подсчёт суммы по столбцам
  var longTxt = '';
  var totalSum = 0;
  for (var j=2; j<12; j++) {
    var sumRangeTop = list.getRange(topPoint + 1, j).getA1Notation();
    var sumRangeBottom = list.getRange(bottomPoint, j).getA1Notation();    
        range = sumRangeTop + ":" + sumRangeBottom; //B3:B121                    

    var countPerMonth = list.getRange(range).getValues();
    var arrayData = countPerMonth;
     
    var sumData = 0;
    for(var i = 0; i < arrayData.length; i++){
        sumData += (arrayData[i])*1;        
    }   
    
    if (sumData != 0){
        category = list.getRange(2, j).getValue();
        txt = category + ' - ' + sumData + ' шек \n';
        longTxt += txt;
    }       
        totalSum += sumData;
  }

  var sumLine = 'Всего: ' + totalSum + ' шек';
     
  var text = encodeURIComponent(dateLine + longTxt + sumLine);    
  sendText(chat_id, text);  
}
