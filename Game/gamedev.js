  
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
  $("#box2").show();
  $("#buttonkeith2").hide();
  score--;
  alert("you don't find apples in fridges!");

});
$("#buttonkeith3").click(function() {
  $("#box3").show();
  $("#buttonkeith3").hide();
  score--;
  alert("you don't find bananas in fridges!");
});
$("#buttonkeith4").click(function() {
  $("#box4").show();
  $("#buttonkeith4").hide();
  score--;
  alert("you don't find people in fridges!");
});
$("#buttonkeith5").click(function() {
  $("#box5").show();
  $("#buttonkeith5").hide();
  score++;
tracker++;
});
$("#buttonkeith6").click(function() {
  $("#box6").show();
  $("#buttonkeith6").hide();
  score++;
  
});
$("#buttonkeith7").click(function() {
  $("#box7").show();
  $("#buttonkeith7").hide();
  score--;
  alert("you don't find aeroplanes in fridges!");
  
});
$("#buttonkeith8").click(function() {
  $("#box8").show();
  $("#buttonkeith8").hide();
  alert("you don't find caravans in fridges!");
  score--;
  
});
$("#buttonkeith9").click(function() {
  $("#box9").show();
  $("#buttonkeith9").hide();
  score++;
  
  
});
$("#buttonkeith10").click(function() {
  $("#box10").show();
  $("#buttonkeith10").hide();
  score--;
alert("you don't find chickens in fridges!");
  
});
$("#buttonkeith11").click(function() {
  $("#box11").show();
  $("#buttonkeith11").hide();
  score++;
  
});
$("#buttonkeith12").click(function() {
  $("#box12").show();
  $("#buttonkeith12").hide();
  score--;
  alert("you don't find toys in fridges!");
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
});


