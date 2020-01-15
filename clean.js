

var elem = document.querySelector("#myBar"); 
var width = 0;
var id = setInterval(frame, 1000);

var breakSeconds = (60*5);
var studySeconds = (60*25);
var seconds = studySeconds
var secondsStorage = studySeconds;

var going = true;
var breaking=false;

var studying = true;
var breaking = false;

var dailyCounter = 0;



function frame() {
  if (seconds===1 && breaking===false){
  	update();
  }
  if (width >= 100 || seconds===0) {
    going = false;
    if (breaking === false){
    	resetForBreak();
    	
    }
    else {
    	resetForStudy();
    	
    }
  } 
  else if (going === false){
    console.log("paused");
  }
  else {
    width=width+(100/secondsStorage); 
    seconds--;
    elem.style.width = width + '%'; 
    console.log(width + '%');
    $("#time").text(displayTime(seconds));
  }
}


function displayTime(sec) {
  var minutes=0;
  var s=0;
  if (sec>60) {
    minutes=sec/60;
    s=seconds%60;
    if (s<10){
      s="0"+s;
    }
    return(Math.floor(minutes)+":"+s);
  }
  return(sec);

}



$("#pause").on("click", function(){
  pause();
});

$("#move").on("click", function(){
  move();
});

$("#reset").on("click", function(){
  reset();
});

function pause(){
  going = false;
}

function move(){
	going = true;
}

function reset(){
	seconds = secondsStorage;
	$("#time").text(displayTime(seconds));
	width = 0;
	elem.style.width = width;
}

function resetForBreak() {
	seconds = breakSeconds;
	secondsStorage = breakSeconds;
	$("#time").text(displayTime(breakSeconds));
	width = 0;
	elem.style.width = width;
	studying=false;
	breaking=true;
  	$("#myBar").addClass("breaking");
  	playAudio();

}

function resetForStudy() {
	seconds = studySeconds;
	secondsStorage = studySeconds;
	$("#time").text(displayTime(seconds));
	width = 0;
	elem.style.width = width;
	studying=true;
	breaking=false;
  	$("#myBar").removeClass("breaking");
  	playAudio();

}

function update() {
	dailyCounter++;
	$("#dailyCounter").text(dailyCounter);
}


var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 


document.body.addEventListener('keyup', function(e) {
  if (e.which === 9) /* tab */ {
    document.documentElement.classList.remove('no-focus-outline');
  }
});






