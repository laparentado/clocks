var time = document.getElementById("time")
var background = document.getElementById("background")
var greeting = document.getElementById("greeting")
var image = document.getElementById("image")

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function myTime(){
  var today = new Date();
  var hours = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  for (var i=0; i<=myTime.length; i++){

  hours = checkTime(hours);
  min = checkTime(min);
  sec = checkTime(sec);

  time.innerHTML = hours +":"+ min +":"+ sec;

  // background.style.backgroundColor = "#"+(hours)+(min)+(sec);
  
  if(hours <=00 || hours <=04){
    image.style.backgroundImage = "url(moon.jpg)";
    greeting.innerHTML = "good night";
  }else if(hours <= 05 || hours <=11){
    image.style.backgroundImage = "url(sunrise.jpg)";
    greeting.innerHTML = "good morning";
  }else if (hours <= 12 || hours <=17){
    image.style.backgroundImage = "url(sun.jpg)";
    greeting.innerHTML = "good afternoon";
  }else{
    image.style.backgroundImage = "url(sunset.jpg)";
    greeting.innerHTML = "good evening";
  }
}
setInterval(function() {
    myTime()
  }, 200);
}
myTime();
