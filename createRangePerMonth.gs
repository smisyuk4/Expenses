function createRangePerMonth(list) {
   //поиск нижней желтой строки (<----- Значения за месяц)
   var bottomPoint = list.getLastRow();     
    while(list.getRange(bottomPoint, 2).getBackground() !== "#ffff00"){
      bottomPoint--;    
    }

  //поиск верхней желтой строки (<----- Значения за месяц)
    var topPoint = bottomPoint;      
      do {
      topPoint--;    
      }while(list.getRange(topPoint, 2).getBackground() !== "#ffff00")

  //формирование имени ячеек диапазона и запись суммы в столбцы
  for (var j=2; j<12; j++) {
    var sumRangeTop = list.getRange(topPoint + 1, j).getA1Notation();
    var sumRangeBottom = list.getRange(bottomPoint - 1, j).getA1Notation();    
        range = sumRangeTop + ":" + sumRangeBottom; //B3:B121        

    var countPerMonth = list.getRange(range).getValues();
    var arrayData = countPerMonth.flat();

    var sumData = 0;
    for(var i = 0; i < arrayData.length; i++){
        sumData += (arrayData[i])*1;
    }       
        list.getRange(bottomPoint, j).setValue(sumData);
  }
}
