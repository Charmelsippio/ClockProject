$(document).ready(function() {

	function time() {
		var today = new Date();
		var hours = today.getHours(); 
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();
		var meridiem = "am";

	//Controls 12hr time
		if (hours >= 12) {
			hours = hours - 12;
			meridiem = "pm";
		}

		if (hours === 0) {
			hours = 12;
		}
		
	//Shows zeros when there is only a single digit
		if (hours < 10) {
			hours = "0" + hours;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		var clockOutput = document.getElementById("clockFace");
		document.getElementById("hours").innerText = hours + ":";
		document.getElementById("minutes").innerText = minutes;
		document.getElementById("seconds").innerText = seconds;
		document.getElementById("meridiem").innerText = meridiem;
	}
	setInterval(time, 100);
	
	
	//Every hour "hours" text color changes
	function randoHours(){ 
		var today = new Date();
	var hours = today.getHours(); 
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var meridiem = "am";
		var clockText = document.getElementById("hours");
		var color1 = String(Math.floor(Math.random()*256));
		var color2 = String(Math.floor(Math.random()*256));
		var color3 = String(Math.floor(Math.random()*256));
		var eachHour = "rgb("+color1+", "+color2+", "+color3+")";

		if ((hours%1 == 0) && (minutes == 0) && (seconds == 0)){
			
			clockText.style.color = eachHour
		}
	}
	setInterval(randoHours, 1000);


	//Every five mintues background color changes 
	function randoColors(){ 
		var today = new Date();
		var hours = today.getHours(); 
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();
		var meridiem = "am";

		var color1 = String(Math.floor(Math.random()*256));
		var color2 = String(Math.floor(Math.random()*256));
		var color3 = String(Math.floor(Math.random()*256));
		var everyHour = "rgb("+color1+", "+color2+", "+color3+")";
		
		if(minutes%5 == 0 && seconds < 1){
			document.getElementById("clockFace").style.backgroundColor = everyHour;
		}
	}
	setInterval(randoColors, 1000);


	//In 5 seconds, the seconds changes to red
	function secsColor(){
		var everyFiveSecs = document.getElementById("seconds");
		everyFiveSecs.style.color = "red";
	}
	setInterval(secsColor, 5000);


	//Every hour an alert pops up to tell you what whole hour you are in
	function newHour() {
		var today = new Date();
		var hours = today.getHours(); 
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();
		var meridiem = "am";

		var eachHour = document.getElementById("hours").innerText; 
		var zeroMins = document.getElementById("minutes").innerText;
		var zeroSecs = document.getElementById("seconds").innerText;

		if ((hours%1 == 0) && (minutes == 00) && (seconds == 00)) {
			alert("You have reached the " + eachHour + " o'clock hour.");
		} else {
			console.log("nothing");
		}
	}
	setInterval(newHour, 1000);
}); //end doc ready