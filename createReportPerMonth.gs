function createReportPerMonth(chat_id){
  list = SpreadsheetApp.openById(idSheet).getSheetByName(nameList2);
  //chat_id = '475321747';
  //поиск нижней желтой строки (<----- Значения за месяц)
  var bottomPoint = list.getLastRow();     
  while(list.getRange(bottomPoint, 2).getBackground() !== "#ffff00"){
    bottomPoint--;    
  }

  var topPoint = bottomPoint;
  if (bottomPoint != 3){
    //поиск верхней желтой строки (<----- Значения за месяц)          
    do {
      topPoint--;    
    }while(list.getRange(topPoint, 2).getBackground() !== "#ffff00")
  } else {

    sendText(chat_id, 'нет данных \uD83D\uDE31');
  }

  var date = new Date(list.getRange(bottomPoint-1, 1).getValue());
  var numMonth = date.getMonth();  
  var month;

  switch(numMonth){
    case 0 : month = 'Январь';
      break;
    case 1 : month = 'Февраль';
      break;
    case 2 : month = 'Март';
      break;
    case 3 : month = 'Апрель';
      break;
    case 4 : month = 'Май';
      break;
    case 5 : month = 'Июнь';
      break;
    case 6 : month = 'Июль';
      break;
    case 7 : month = 'Август';
      break;
    case 8 : month = 'Сентябрь';
      break;
    case 9 : month = 'Октябрь';
      break;
    case 10 : month = 'Ноябрь';
      break;
    case 11 : month = 'Декабрь';
      break;
  }

  var dateLine = month + ' расходы составили:\n';
  
  var txt = ''; 
  var totalSum = 0;

  for (var i = 2; i < 12; i++){
    category = list.getRange(2, i).getValue();
    data = list.getRange(bottomPoint, i).getValue();
    totalSum += data;
    if (data != 0){
      txt += category + ' - ' + data + ' шек \n';
    }
  }  
  var sumLine = 'Всего: ' + totalSum + ' шек';    

  var text = encodeURIComponent(dateLine + txt + sumLine);        
  sendText(chat_id, text);  
}
