  //исправляет сообщение в чате
  function editMessageText(chat_id, text, message_id, keyBoard) {
    let data = {
      method: 'post',
      payload: {
       method: 'editMessageText',
        chat_id: String(chat_id),
        message_id: String(message_id),
        text: text,
        parse_mode: 'HTML',
        reply_markup: JSON.stringify(keyBoard)
      }
    };
    try {UrlFetchApp.fetch('https://api.telegram.org/bot' + idBot + '/', data)}
    catch (e) { SpreadsheetApp.openById(idSheet).getSheetByName('Exeption').getRange(1, 1).setValue(e); }
  }
