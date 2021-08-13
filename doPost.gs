function doPost(e) {       
  // получаем сигнал от бота
  var contents = JSON.parse(e.postData.contents);  
    incomingData(contents);   
}
    
 
