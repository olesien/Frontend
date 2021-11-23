//variable declarations
const gameContainer = document.querySelector("#gameContainer");
const introduction = document.querySelector(".introduction");
const game = document.querySelector(".game");
const choicesEl = document.querySelector("#choices");

const cheatEl = document.querySelector("#cheat");

const totalGuessesEl = document.querySelector(".totalGuesses");

const progressEl = document.querySelector(".progress");

const comparedToLastRoundEl = document.querySelector(".comparedToLastRound");

const resultsEl = document.querySelector("#results");

//all choices are used from choices.js

//a log of all guesses this game, used for the view results
const choiceLog = [];

let guesses = 0;
let failedGuesses = 0;
let randomizedChoice = -1;

//functions
//My way of creating a real copy of the choices (students)
const setChoicesEditable = () => {
	return choices.map((obj) => {
		return { name: obj.name, url: obj.url, picked: false };
	});
};

//Make an actual copy of the choices, used per round and will reset
let choicesEditable = setChoicesEditable();

//Basic way to get a randomized choice
const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

//Show how well you have done so far / in total this match
const showResults = () => {
	let returnHTML = choiceLog.map(
		(choice, index) =>
			`<li><img src="${choice.url}"><p>${choice.name}<p>Failed Guesses: ${
				choice.failedGuesses
			}</p><p>Round: ${index + 1}</p</li>`
	);
	resultsEl.innerHTML = returnHTML;
};

//Start the game
const toggleGameScreen = () => {
	//If there is no length left in the editable array, the user must have won!
	if (choicesEditable.length == 0) {
		alert("You win");
		//should toggle results
		showResults();
		return;
	}

	//New round!
	guessesRound = 0;
	//Reset the choice
	randomizedChoice = getRandomInt(choicesEditable.length);

	//Comment below line in or out to get a cheat text for testing
	cheatEl.innerText = choicesEditable[randomizedChoice].name;

	//Check for all HTML elements with the class choice, and make a list from them to iterate over
	let choiceArray = Array.from(game.getElementsByClassName("choice"));

	//because one copy isn't enough :)
	let choicesCopy = setChoicesEditable();

	//This will randomize where the selected array index is placed
	let placementIndex = getRandomInt(choiceArray.length);

	//Clean the choices
	choicesEl.innerHTML = "";

	//map through the choices
	const choiceElementMap = choiceArray.map((choiceEl, index) => {
		let name = "";
		if (placementIndex === index) {
			//In every run through, the randomized choice must appear. This checks if that is the randomized index
			//The name and image of the "right" person will thus appear on this index
			game.querySelector("img").src = choicesEditable[randomizedChoice].url;
			name = choicesEditable[randomizedChoice].name;
		} else {
			//Should be a "wrong" choice
			//remove all those in the array that have already been picked
			let filteredChoices = choicesCopy.filter(
				(choice) =>
					!choice?.picked == true &&
					choice.name !== choicesEditable[randomizedChoice].name
			);
			//pick one in array
			let randomChoice = getRandomInt(filteredChoices.length);
			//make sure it doesn't get picked again
			filteredChoices[randomChoice].picked = true;
			//set the wrong name
			name = filteredChoices[randomChoice].name;
			choicesCopy = filteredChoices;
		}
		//update the html in said LI
		choiceEl.innerHTML = `
            <input type="button" value="${name}" class="choiceButton" id="choice-${
			index + 1
		}">`;
		return choiceEl;
	});
	//put the pieces together, choicesElementMap will simply be an array with HTML that looks like above
	choiceElementMap.forEach((choice) => choicesEl.appendChild(choice));
};

//Check a guess that the user made, is it right or wrong?
const checkGuess = (clickedEl) => {
	guesses++;
	//Set how many total guesses you hae done so far this match
	totalGuessesEl.innerText = `${guesses} guesses`;

	//The guess was correct!
	if (clickedEl.value === choicesEditable[randomizedChoice].name) {
		//do next round
		//check how many guesses you did wrong last wrong for comparison (if its not the first round)
		let failedGuessesLastRound =
			choiceLog.length != 0
				? choiceLog[choiceLog.length - 1].failedGuesses
				: failedGuesses;

		//How well did you do?
		if (failedGuesses > failedGuessesLastRound) {
			//worse
			comparedToLastRoundEl.innerText = "That was worse than last round!";
		} else if (failedGuesses < failedGuessesLastRound) {
			//better
			comparedToLastRoundEl.innerText = "That was way better than last round!";
		} else {
			//same
			comparedToLastRoundEl.innerText = "";
		}
		//Add to log
		choiceLog.push({
			...choicesEditable[randomizedChoice],
			round: 1,
			failedGuesses: failedGuesses,
		});

		//reset active failed guesses
		failedGuesses = 0;
		//Check what progress you have (% of all persons guessed total)
		let progress = Math.round(
			(1 - (choicesEditable.length - 1) / choices.length) * 100
		);
		progressEl.innerText = `${progress}% complete`;

		//reset choices
		choicesEditable = choicesEditable
			.map((choice) => {
				return {
					name: choice.name,
					url: choice.url,
				};
			})
			.filter((choice) => choice.name !== clickedEl.value);
		console.log(choicesEditable);

		//render
		toggleGameScreen();
	} else if (!clickedEl.classList.contains("incorrect-guess")) {
		//wrong guess
		clickedEl.classList.add("incorrect-guess");
		failedGuesses++;
	}
};

//Add event listener to the entire game container, then check what is clicked later
gameContainer.addEventListener("click", (e) => {
	const clickedEl = e.target;
	classListEl = clickedEl.classList;
	if (classListEl.contains("startGame")) {
		//Is start game button, rerender screen and hide introduction
		toggleGameScreen();
		introduction.classList.toggle("hideElement");
		game.classList.toggle("showElement");
		return;
	}
	if (classListEl.contains("choiceButton")) {
		//Check if guess what right
		checkGuess(clickedEl);
		return;
	}

	if (classListEl.contains("restartBtn")) {
		//Restart button is pressed, reset and rerender
		resultsEl.innerHTML = "";
		choicesEditable = setChoicesEditable();
		totalGuessesEl.innerText = "0 guesses";
		progressEl.innerText = "0% progress";
		//clear logs
		choiceLog.splice(0, choiceLog.length);
		toggleGameScreen();
		return;
	}

	if (classListEl.contains("resultsBtn")) {
		//See results of active match
		if (resultsEl.innerHTML != "") {
			//hide
			resultsEl.innerHTML = "";
			return;
		}
		showResults();
		return;
	}
});
