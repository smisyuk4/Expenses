function sortData(today, chat_id, textFromUser) {  
  var list = SpreadsheetApp.openById(idSheet).getSheetByName(nameList2);
  var lastRow = list.getLastRow();
  
  var stringText = textFromUser.toLowerCase();
  var arrText = stringText.split(' ');
  var category = arrText[0];
  var count = arrText[1]; 
      Logger.log(arrText);

      list.getRange(lastRow+1, 1).setValue(today);

  if (categoryBase.supermarket.search(category) > 0){
      list.getRange(lastRow+1, 2).setValue(count);
  } else if (categoryBase.rent.search(category) > 0){
      list.getRange(lastRow+1, 3).setValue(count);
  } else if (categoryBase.transport.search(category) > 0){
      list.getRange(lastRow+1, 4).setValue(count);
  } else if (categoryBase.veterinary.search(category) > 0){
      list.getRange(lastRow+1, 5).setValue(count);
  } else if (categoryBase.eatingOut.search(category) > 0){
      list.getRange(lastRow+1, 6).setValue(count);
  } else if (categoryBase.hospital.search(category) > 0){
      list.getRange(lastRow+1, 7).setValue(count); 
  } else if (categoryBase.menage.search(category) > 0){
      list.getRange(lastRow+1, 8).setValue(count);
  } else if (categoryBase.presents.search(category) > 0){
      list.getRange(lastRow+1, 9).setValue(count);
  } else if (categoryBase.dress.search(category) > 0){
      list.getRange(lastRow+1, 10).setValue(count);
  } else {
      list.getRange(lastRow+1, 11).setValue(count);
  } 

      finishMonth(today, list, lastRow);
      sendText(chat_id, '\uD83D\uDC4C');  
}
