$( document ).ready(function() {
var score=0 
$("#box2").hide(); //hides apple

$("#box3").hide(); //hides a thing
$("#box4").hide(); //hides banana
$("#box5").hide(); //hides astuff
$("#box6").hide(); //hides a button

$("#buttonkeith2").hide();
$("#buttonkeith3").hide();
$("#buttonkeith4").hide();
$("#buttonkeith5").hide();
$("#buttonkeith6").hide();
$("#buttonnewestsofar").hide();
document.write(score)
//appear example


//this opens the fridge
$("#buttonkeith").click(function() {
  $("body").css("backgroundImage", "url(http://thumbs.dreamstime.com/x/empty-fridge-4468901.jpg)")
  $("#buttonkeith").hide();
  $("#box1").hide();
  $("#button2").hide();
  $("#button3").hide();
  $("#button1").hide();
  $("#buttonkeith2").show();
  $("#buttonkeith3").show();
  $("#buttonkeith4").show();
  $("#buttonkeith5").show();
  $("#buttonkeith6").show();
   $("#buttonnewestsofar").show();
});
$("#buttonkeith2").click(function() {
  $("#box2").show();
  $("#buttonkeith2").hide();
  var score= score+1;

});
$("#buttonkeith3").click(function() {
  $("#box3").show();
  $("#buttonkeith3").hide();
  var score= score+1;
});
$("#buttonkeith4").click(function() {
  $("#box4").show();
  $("#buttonkeith4").hide();
  var score= score+1;
});
$("#buttonkeith5").click(function() {
  $("#box5").show();
  $("#buttonkeith5").hide();
  var score= score+1;
});
$("#buttonkeith6").click(function() {
  $("#box6").show();
  $("#buttonkeith6").hide();
  var score= score+1;
  alert("you win")
});
$("#buttonnewestsofar").click(function() {
window.open("/Game/index.html")
});

});
