function incomingData(contents) { 
  list = SpreadsheetApp.openById(idSheet).getSheetByName(nameList1);
  list.getRange(1, 1).setValue(contents);   

  //проверяет на ответ с кнопок
  if (contents.callback_query){
      answer = contents.callback_query.data;
      chat_id = contents.callback_query.from.id;
      message_id = contents.callback_query.message.message_id;      

      if (answer == 'month'){        
        editMessageText(chat_id, 'За прошлый месяц', message_id, keyBoard = {inline_keyboard: []});
        createReportPerMonth(chat_id);        
      } else if (answer == 'period') {
        editMessageText(chat_id, 'За текущий период', message_id, keyBoard = {inline_keyboard: []});
        createReportPerPeriod(chat_id);
      }      
  } else if (contents.message){
     chat_id = contents.message.chat.id;

      //проверяет на наличие команд в тексте
     if (contents.message.text.toLowerCase() == '/report' ||
        contents.message.text.toLowerCase() == 'отчёт' ||
        contents.message.text.toLowerCase() == 'отчет'){        
        sendMessage(chat_id, 'За какой период сформировать отчёт?', keyboard_inline);
      
      } else if (contents.message.text.toLowerCase() == '/category'){
        var categoryList = '';
        for (var key in categoryBase){
            categoryList += categoryBase[key];
        }
        
        var text = encodeURIComponent(categoryList);        
        var createLink = "https://api.telegram.org/bot" + idBot + "/sendMessage?chat_id=" + chat_id + "&text=" + text;          
        try{
          var loadLink = UrlFetchApp.fetch(createLink);
        } catch (e){
          SpreadsheetApp.openById(idSheet).getSheetByName(nameList4).getRange(1, 1).setValue(e); 
        }

      //передаёт данные для записи в таблицу и хранения
      } else {  
        dateUnix = contents.message.date; //Unix time (время в секундах)  
        today = new Date(dateUnix * 1000);
        
        firstNameUser = contents.message.chat.first_name;   
        textFromUser = contents.message.text;

        lastRow = list.getLastRow(); 

            //проверка на наличие цифр в тексте               
            if (/\d/.test(textFromUser)){                                                                                 
                  list.getRange(lastRow+1, 1).setValue(today);  
                  list.getRange(lastRow+1, 2).setValue(firstNameUser);  
                  list.getRange(lastRow+1, 3).setValue(textFromUser);    
                  sortData(today, chat_id, textFromUser);                  
            } else {              
                  list.getRange(2, 6).setValue("текст без цифр: " + textFromUser);       
                  sendText(chat_id, 'Не верные данные \uD83D\uDE22');                               
            }                 
        }
  }
}
