/**
 * Guess the number
 * Lesson: 3
 *
 * STEG 1
 * Sätt ett tal i en variabel. Be användaren att gissa talet. Om det är fel,
 * fråga igen. Om det är rätt, visa en alert med ett grattis-meddelande.
 * Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * STEG 4
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet
 * på nytt.
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 */

const formEl = document.getElementById("guesser");
const numberInputEl = document.getElementById("number-input");
const feedbackEl = document.getElementById("feedback");
const resetButtonEl = document.getElementById("reset-button");
const highscoreEl = document.getElementById("highscore");
const guessesEl = document.getElementById("guesses");

// Get a random number between 1-10
function getRandomNumber() {
	return Math.ceil(Math.random() * 10);
}

function reset(resetCurrent = true) {
	if (resetCurrent) {
		feedbackEl.innerText = "Guess a number between 1 and 10!";
		numberInputEl.value = "";
	}

	guesses = 0;
	//highscore = 0;
	guessesEl.innerText = guesses;
	//highscoreEl.value = highscore;
	numberToGuess = parseInt(getRandomNumber());
	resetOnNext = false;
}

// const getRandomNumber = function(max = 10) {
// 	return Math.ceil( Math.random() * max );
// }

/**
 * Number to guess
 */

let highscore = false;
//let exitGame = false;
//while (!exitGame) {
// PARTY ON

let numberToGuess = parseInt(getRandomNumber());
//let continueGame = true;
let guesses = 0;
let resetOnNext = true;

console.log(`numberToGuess: ${numberToGuess}`);

//while (continueGame) {
// Increase number of guesses made
formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	if (resetOnNext) {
		reset(false);
	}
	console.log(e);
	//console.log(e.get("number-input"));
	//console.log(form.get("number-input"));

	guesses++; //   guesses += 1   guesses = guesses + 1
	guessesEl.innerText = guesses;

	// Ask user for guess
	let guess = Number(numberInputEl.value);
	if (isNaN(guess) || guess < 0 || guess > 10) {
		feedbackEl.innerText = "Invalid Input";
		return;
	}
	console.log("Guessed number:", guess, typeof guess);

	// Is guess correct?
	if (guess === numberToGuess) {
		// we can haz highscore?
		if (highscore) {
			// new highscore?
			if (guesses < highscore) {
				console.log(`YAY NEW HIGHSCORE!`);
				highscore = guesses;
			} else {
				feedbackEl.innerText = `Sorry, no new highscore. Your current highscore is ${highscore}.`;
				resetOnNext = true;

				return;
			}
		} else {
			highscore = guesses;
			highscoreEl.innerText = guesses;
		}

		console.log("Guess was correct! 🥳");
		feedbackEl.innerText = `Great success! You guessed the correct answer in ${guesses} guesses 🥳`;
		resetOnNext = true;

		//continueGame = false;
	} else if (guess === 0) {
		console.log("Guess was 0, quitting game");
		feedbackEl.innerText = `Y U GIVE UP AFTER ONLY ${guesses} GUESSES?!`;
		//continueGame = false;
		//exitGame = true;
	} else if (guess < numberToGuess) {
		feedbackEl.innerText = `TOO LOW!`;
	} else if (guess > numberToGuess) {
		feedbackEl.innerText = `TOO HIGH!`;
	}
});

resetButtonEl.addEventListener("click", () => {
	reset();
});
//}
//}
