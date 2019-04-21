function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile('index');
}

function getData(val){ 

var letters = /^[A-Za-z]+$/;
if(!val.match(letters)) return ['Please enter an english word']



var sh = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1dnd_n6dtIM5nFOfvvqMPlXyv2Y5DUz_Uzchg59ea11Q/edit#gid=15').getSheetByName('english'); 
var last=sh.getLastRow();
var data=sh.getRange(1, 1, last, 2 ).getValues();
 var outArray=[];
   for(var n=0;n<data.length;++n){
   
      if (data[n][0].match(val) )   { 
       var z=data[n][0].split(" ");
       
      for(s=0;s<z.length;++s)                 {
       if (z[s]==val )  {
      
        outArray.push(data[n][0]);
        outArray.push(data[n][1]);
                                                           
} } } }

 Logger.log(outArray);
 if(outArray.length==0)return ['Sorry, not found']
return outArray ;                                                                           
}
