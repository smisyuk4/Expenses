function doPost(e) {       
  // получаем сигнал от бота
  var contents = JSON.parse(e.postData.contents);     
  
  
  if (contents.message.chat.id == user){  
    incomingData(contents);  
  } else {
    SpreadsheetApp.openById(idSheet).getSheetByName(nameList4).getRange(3, 4).setValue(contents.message.chat.id);
  }
}
    
 
