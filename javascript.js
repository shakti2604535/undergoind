var playing = false;
var score;
var action;
var timeremain;
document.getElementById("start").onclick = function(){
	     if(playing == true){
			 location.reload();
		 }else{
			 playing = true;
			 score = 1;
document.getElementById("scorevalue").innerHTML = score;
			document.getElementById("timeleft").style.display = "block";
			 timeremain = 60;
		  document.getElementById("timevalue").innerHTML = timeremain;
			 document.getElementById("start").innerHTML = "reset Game";
			 startcountdown()
	 }
}

function startcountdown(){
	action = setInterval(function(){
		timeremain -= 1;
		document.getElementById("timevalue").innerHTML = timeremain;
	}, 1000);
}