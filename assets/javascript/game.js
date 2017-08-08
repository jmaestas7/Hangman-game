var wins = 0;
var losses = 0;
var audio = new Audio('assets/audio/Project Omeaga - Prednison Attack (N-Vitral Remix).mp3');
audio.play();
audio.volume = 0.1;
var gamestart;
var lives = 7;
var trys = 0;
var alrGuessed = [];

 document.onkeypress=function(){

	 if (!gamestart || won == true) {
		var wordPoss = ["SUPPA", "LEKKER", "THUNDERDOME", "OPHIDIAN", "ENZYMEX", "NVITRAL", "NEOPHYTE", "DOMINATOR"]
	    // create random int to pull from array above and make array that matches above word
	    var rand = Math.floor((Math.random() * wordPoss.length));
	    var word = wordPoss[rand];
	    var wordSplit = word.split("");	    
	    var lengthArray = new Array(word.length);

	    // create lengthArray that is equal to blank spaces at it's length
	    for (var i = 0; i < lengthArray.length; i++){
			lengthArray[i] = "_ ";
			var guessfield = document.getElementById("guessfield");
			var letter = document.createTextNode(lengthArray[i]);
			guessfield.appendChild(letter);
		}

		var counter =
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Lives: " + lives + "</p>";
		document.querySelector("#counter").innerHTML = counter;


		document.getElementById("gamestart").remove();

	}

		document.onkeypress = checkKey;

		function checkKey(event) {
			var input = event.which || event.keyCode;
		    var guess  = String.fromCharCode(input);
			guess = guess.toUpperCase();
			var trys = 0;
			console.log(guess);
				for (var i = 0; i < word.length; i++) {
					if(word[i] === guess) {
						word[i] = guess;
						lengthArray[i] = lengthArray[i].replace("_", guess);
						trys++;
 					}
				}

			if (trys <= 0) {
				lives--;
			}

			if (lives <= 0) {
				alert("Sorry you're not hardcore, you lost.");
				won = true;
				lives = 0;
				losses++;
			}

			alrGuessed.push(guess + " ");
			trys = 0;

			document.getElementById("guessfield").innerHTML = lengthArray.join("");

			var winning = true;

			for (var i = 0; i < lengthArray.length; i++){
				if(lengthArray[i] === "_ "){
					winning = false;
				}
			}

			if(winning){
				wins++;
				alert("You Win! You are a true wizard!");
				alrGuessed = [];
				lives = 7;
				won = true;
			}

		var counter =
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Lives: " + lives + "</p>" +
		"<p>Guessd Letters: " + alrGuessed + "<p>";
		document.querySelector("#counter").innerHTML = counter;
		}
}