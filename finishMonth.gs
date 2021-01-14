function finishMonth(today, list, lastRow) {
   //выяснение дня недели, месяца, года 
  var todayDate = today.getDate();   
  var numMonth = today.getMonth() + 1; 
  var fullYear = today.getFullYear(); 
  
  /*
  0 - Воскресенье, 1 - Понедельник, ..., 6 - Суббота    
  0 - Январь, 1 - Февраль, ..., 11 - Декабрь
  */
   
  //учитывает высокосность года  
  var lastDayMonth = 28 + ((numMonth + Math.floor(numMonth / 8)) % 2) + 2 % numMonth + 
    Math.floor((1 + (1 - (fullYear % 4 + 2) % (fullYear % 4 + 1)) * 
      ((fullYear % 100 + 2) % (fullYear % 100 + 1)) + (1 - (fullYear % 400 + 2) % (fullYear % 400 + 1))) / numMonth) + 
        Math.floor(1/numMonth) - Math.floor(((1 - (fullYear % 4 + 2) % (fullYear % 4 + 1)) * 
          ((fullYear % 100 + 2) % (fullYear % 100 + 1)) + (1 - (fullYear % 400 + 2) % (fullYear % 400 + 1)))/numMonth);    
    
  if (todayDate == lastDayMonth){
    list.getRange(lastRow+2, 1, 1, 11).setBackground("#ffff00");  
    list.getRange(lastRow+2, 12).setValue("<----- Значения за месяц");  
    //запуск подсчёта итогов месяца
    createRangePerMonth(list);  
  }      
}
