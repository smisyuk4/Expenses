function loadPhoto(photo_id, chat_id) {  
  //ищем информацию к картинке
  var lastRow_chek = SpreadsheetApp.openById(idSheet).getSheetByName(nameList5).getLastRow();      
  var text_chek = SpreadsheetApp.openById(idSheet).getSheetByName(nameList5).getRange(lastRow_chek, 3).getValue();

  var lastRow_inPut = SpreadsheetApp.openById(idSheet).getSheetByName(nameList1).getLastRow();  
  var date_inPut = SpreadsheetApp.openById(idSheet).getSheetByName(nameList1).getRange(lastRow_inPut, 1).getValue();
  var name_inPut = SpreadsheetApp.openById(idSheet).getSheetByName(nameList1).getRange(lastRow_inPut, 2).getValue();
  var text_inPut = SpreadsheetApp.openById(idSheet).getSheetByName(nameList1).getRange(lastRow_inPut, 3).getValue();  

  //проверка на повторящийся расход  
  if (text_chek == text_inPut){
      lastRow_chek -=1;
  } 

  //записываем информацию к картинке
  SpreadsheetApp.openById(idSheet).getSheetByName(nameList5).getRange(lastRow_chek+1, 1).setValue(date_inPut);
  SpreadsheetApp.openById(idSheet).getSheetByName(nameList5).getRange(lastRow_chek+1, 2).setValue(name_inPut);
  SpreadsheetApp.openById(idSheet).getSheetByName(nameList5).getRange(lastRow_chek+1, 3).setValue(text_inPut);

  //делаем ячейку больше
  SpreadsheetApp.openById(idSheet).getSheetByName(nameList5).setRowHeight(lastRow_chek+1,300); //300 px  

  //поиск пустой ячейки для новой картинки
  var startCell = 4;
  var emptyCell;
  var cellInfo;

  do {
    emptyCell = startCell;
    cellInfo = SpreadsheetApp.openById(idSheet).getSheetByName(nameList5).getRange(lastRow_chek+1, startCell).getValue();    
    startCell += 2;
  } while (cellInfo != '')

  //отправляем photo_id, чтобыполучить file_path
  var get_path = UrlFetchApp.fetch("https://api.telegram.org/bot" + idBot + "/getFile?file_id=" + photo_id);

  //извлекаем file_path
  var fp = JSON.parse(get_path);
  var file_path = fp.result.file_path;
   
  //формирем ссылку на картинку
  var link2 = "https://api.telegram.org/file/bot" + idBot + "/" + file_path;
  var formula = "=IMAGE(\"" + link2 + "\")";
  var formula2 = "=HYPERLINK(\"" + link2 + "\"; \"Ссылка\")";

  //записываем картинку и ссылку в таблицу
  SpreadsheetApp.openById(idSheet).getSheetByName(nameList5).getRange(lastRow_chek+1, emptyCell).setFormula(formula);
  SpreadsheetApp.openById(idSheet).getSheetByName(nameList5).getRange(lastRow_chek+1, emptyCell+1).setFormula(formula2);   
  sendText(chat_id, 'Фото загружено \uD83D\uDC4C'); 
}
