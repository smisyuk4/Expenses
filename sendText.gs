function sendText(chat_id, text){  
  var createLink = "https://api.telegram.org/bot" + idBot + "/sendMessage?chat_id=" + chat_id + "&text=" + text;          
  try{
    var loadLink = UrlFetchApp.fetch(createLink);
  } catch (e){
    SpreadsheetApp.openById(idSheet).getSheetByName(nameList4).getRange(1, 1).setValue(e); 
  }
}
