var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoices = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


document.onkeyup = function(event) {
	

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in users guess
	
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; // computer chooses randmom letter
		
		guessesSoFar.push(userGuess); //pushing user guess to guesses so far

		if (userGuess == computerGuess){
			wins++; // adding a number to user wins
			alert('Congratulations, you read the computer\'s mind!');
			guessesLeft = 9 //reseting the guesses back to 9 to restart the game
			guessesSoFar.length = 0 //resets the guessesSoFar array 
		}

		else if (guessesLeft == 0){
			losses++;
			alert('OOPSSS, YOU CHOSE WRONG!! The computer chose the letter ' + computerGuess + '. Try again!!');
			guessesLeft = 9;
			guessesSoFar.length = 0;
		}

		else if (userGuess !== computerGuess){ //if the users guess doesn't equal the computers guess 
			guessesLeft--; //decresing the guesses left if user chooses wrong
		}


		document.getElementById("wins").innerHTML = wins;
		document.getElementById("losses").innerHTML = losses;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
 

	

}
