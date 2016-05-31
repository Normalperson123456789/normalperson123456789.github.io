  
$( document ).ready(function() {

var money=0;
var score=0;
var tracker=0;
$("#box2").hide(); //hides apple
$("#box3").hide(); //hides a thing
$("#box4").hide(); //hides banana
$("#box5").hide(); //hides astuff
$("#box6").hide(); //hides a button
$("#box7").hide();
$("#box8").hide();
$("#box9").hide();
$("#box10").hide();
$("#box11").hide();
$("#box12").hide();
$("#box13").hide();

$("#buttonkeith2").hide();
$("#buttonkeith3").hide();
$("#buttonkeith4").hide();
$("#buttonkeith5").hide();
$("#buttonkeith6").hide();
$("#buttonkeith7").hide();
$("#buttonkeith8").hide();
$("#buttonkeith9").hide();
$("#buttonkeith10").hide();
$("#buttonkeith11").hide();
$("#buttonkeith12").hide();
$("#buttonkeith13").hide();
$("#buttonnewestsofar").hide();
$("#buttonscore").show();
//appear example

//this opens the fridge
$("#buttonkeith").click(function() {
  $("body").css("backgroundImage", "url(http://thumbs.dreamstime.com/x/empty-fridge-4468901.jpg)")
  $("#buttonkeith").hide();
  $("#buttonkeith2").show();
  $("#buttonkeith3").show();
  $("#buttonkeith4").show();
  $("#buttonkeith5").show();
  $("#buttonkeith6").show();
    $("#buttonkeith7").show();
  $("#buttonkeith8").show();
  $("#buttonkeith9").show();
  $("#buttonkeith10").show();
  $("#buttonkeith11").show();
  $("#buttonkeith12").show();
  $("#buttonkeith13").show();
  $("#buttonnewestsofar").show();
});
$("#buttonkeith2").click(function() {
if (money > 2){
  $("#box2").show();
  $("#buttonkeith2").hide();
  score++;
    money--;
      money--;
        money--;
  
}
 else{

 } 
});
$("#buttonkeith3").click(function() {
 if (money > 2){
  $("#box3").show();
  $("#buttonkeith3").hide();
  score++;
    money--;
      money--;
        money--;

}
 else{

 } 
});
$("#buttonkeith4").click(function() {
  if (money > 2){
  $("#box4").show();
  $("#buttonkeith4").hide();
  score--;
    money--;
      money--;
        money--;
  alert("you don't find people in fridges!");
}
 else{

 } 
});
$("#buttonkeith5").click(function() {
 if (money > 2){
  $("#box5").show();
  $("#buttonkeith5").hide();
  score++;
    money--;
      money--;
        money--;

}
 else{

 } 
});
$("#buttonkeith6").click(function() {
 if (money > 2){
  $("#box6").show();
  $("#buttonkeith6").hide();
  score++;
    money--;
      money--;
        money--;

}
 else{

 } 
});

$("#buttonkeith7").click(function() {
if (money > 2){
  $("#box7").show();
  $("#buttonkeith7").hide();
  score--;
    money--;
      money--;
        money--;
  alert("you don't find aeroplanes in fridges!");
}
 else{

 } 
});
$("#buttonkeith8").click(function() {
  if (money > 2){
  $("#box8").show();
  $("#buttonkeith8").hide();
  score++;
    money--;
      money--;
        money--;
  alert("you don't find caravans in fridges!");
}
 else{

 } 

 
});
$("#buttonkeith9").click(function() {
 if (money > 2){
  $("#box9").show();
  $("#buttonkeith9").hide();
  score++;
    money--;
      money--;
        money--;

}
 else{

 } 
  
  
});
$("#buttonkeith10").click(function() {
if (money > 2){
  $("#box10").show();
  $("#buttonkeith10").hide();
  score--;
    money--;
      money--;
        money--;
  alert("you don't find chickens in fridges!");
}
 else{

 } 
  
});
$("#buttonkeith11").click(function() {
 if (money > 2){
  $("#box11").show();
  $("#buttonkeith11").hide();
  score++;
    money--;
      money--;
        money--;

}
 else{

 } 
  
});
$("#buttonkeith12").click(function() {
  if (money > 2){
  $("#box12").show();
  $("#buttonkeith12").hide();
  score--;
    money--;
      money--;
        money--;
  alert("you don't find toys in fridges!");
}
 else{

 } 
});
$("#buttonkeith13").click(function() {
  $("#box13").show();
  $("#buttonkeith13").hide();
  score--;
  alert("you don't find spaceships in fridges!");
});
$("#buttonnewestsofar").click(function() {
window.open("index.html");
});
$("#buttonscore").click(function() {
alert("Your score is "+score);
});

while (tracker == 1){

money++;


}




$("#buttonmoney").click(function() {
alert("Your money is "+money);


});
$("#buttonmoneyplus").click(function() {
money++;




});

});


