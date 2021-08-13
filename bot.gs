var idBot = '***';
var telegramURL = 'https://api.telegram.org/bot' + idBot;
var webAppURL = 'https://script.google.com/macros/s/*****/exec';
var idSheet = '*';
var nameList1 = 'Лист1';
var nameList2 = 'Лист2';
var nameList3 = 'Статистика';
var nameList4 = 'Exeption';
var nameList5 = 'Чеки';
const locale = 'he-IL';
const dateOptions =  {timeZone:'Asia/Jerusalem',year: 'numeric', month: '2-digit', day: '2-digit'};

var categoryBase = {
      supermarket : '\uD83D\uDED2 \uD83E\uDD51 супермаркет, еда, продукты \n', //2
      rent : '\uD83C\uDFE0 \uD83D\uDCDE комуналка, квартира, аренда, свет, вода, телефон, интернет \n', //3
      transport : '\uD83D\uDE8C \u2708\uFE0F транспорт, автобус, рав-кав, доставка, самолёт \n',//4
      veterinary : '\uD83D\uDC3E \uD83D\uDC36 ветеринария, собака, чио, корм \n',//5
      eatingOut : '\uD83C\uDF55 \uD83C\uDF54 пиццерия, кафе, ресторан ,бар, пикник \n',//6
      hospital : '\uD83D\uDE91 \uD83D\uDC89 больница, лечение, аптека, клалит \n',//7
      menage : '\uD83D\uDECF\uFE0F \uD83D\uDCFA хозяйство, мебель, икея, химия, электроника \n',//8
      presents : '\uD83C\uDF81 \uD83D\uDC8D подарки \n',//9  
      dress : '\uD83D\uDC55 \uD83D\uDC62 одежда, обувь, аксесуары \n',//10
      others : '\uD83E\uDD14 \uD83D\uDCAD прочее \n'//11
  }


//Установка веб хука после создания бота. Сделать только 1 раз
function setWebHook(){
  var url = telegramURL + '/setWebHook?url=' + webAppURL;
  UrlFetchApp.fetch(url);
}
