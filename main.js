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

	time();

	setInterval(time, 1000);

	//Every 5 seconds, the seconds change to red
	function secsColor(){
		var everyFiveSecs = document.getElementById("seconds");
		everyFiveSecs.style.color = "red";
	}
	setInterval(secsColor, 5000);

	//Every hour an alert pops up to tell you what whole hour you are in
	function newHour() {
		var eachHour = document.getElementById("hours").innerText; 
		var zeroMins = document.getElementById("minutes").innerText == "00";
		var zeroSecs = document.getElementById("seconds").innerText == "00";

		if(zeroMins + zeroSecs == "00") {
			confirm("You have reached the " + eachHour + " hour.");
		} else {
			console.log("nothing")
		}
	}
	setInterval(newHour, 3600000);

//Every five mintues background color changes
	function randoColors(){ 
	var color1 = String(Math.floor(Math.random()*256));
	var color2 = String(Math.floor(Math.random()*256));
	var color3 = String(Math.floor(Math.random()*256));
	var everyHour = "rgb("+color1+", "+color2+", "+color3+")";
	document.getElementById("clockFace").style.backgroundColor = everyHour;
}
	setInterval(randoColors, 300000)

	//Every hour "hours" text color changes
	function randoHours(){ 
	var color1 = String(Math.floor(Math.random()*256));
	var color2 = String(Math.floor(Math.random()*256));
	var color3 = String(Math.floor(Math.random()*256));
	var everyHour = "rgb("+color1+", "+color2+", "+color3+")";
	document.getElementById("hours").style.color = everyHour;	
}
	setInterval(randoHours, 3600000)

});