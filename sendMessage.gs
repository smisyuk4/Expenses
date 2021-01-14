function sendMessage(chat_id, text, keyBoard){
  var data = {
          method: "post",
          payload: {
            method: 'sendMessage',
            chat_id: String(chat_id),
            text: text,
            parse_mode: 'HTML',
            reply_markup: JSON.stringify(keyBoard)
        }  
  }
   UrlFetchApp.fetch('https://api.telegram.org/bot' + idBot + '/', data);
}
