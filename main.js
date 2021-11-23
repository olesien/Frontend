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

	let placementIndex = getRandomInt(choiceArray.length);
	choicesEl.innerHTML = "";

	const choiceElementMap = choiceArray.map((choiceEl, index) => {
		let name = "";
		if (placementIndex === index) {
			game.querySelector("img").src = choicesEditable[randomizedChoice].url;
			name = choicesEditable[randomizedChoice].name;
		} else {
			let filteredChoices = choicesCopy.filter(
				(choice) =>
					!choice?.picked == true &&
					choice.name !== choicesEditable[randomizedChoice].name
			);
			console.log(filteredChoices);
			let randomChoice = getRandomInt(filteredChoices.length);
			console.log(filteredChoices[randomChoice]);
			console.table(filteredChoices);
			filteredChoices[randomChoice].picked = true;

			name = filteredChoices[randomChoice].name;
			choicesCopy = filteredChoices;
			console.log("Name: " + name);
		}
		choiceEl.innerHTML = `
            <input type="button" value="${name}" class="choiceButton" id="choice-${
			index + 1
		}">`;
		return choiceEl;
	});
	choiceElementMap.forEach((choice) => choicesEl.appendChild(choice));

	//choiceElementMap.forEach()
};

const checkGuess = (clickedEl, id) => {
	guesses++;
	totalGuessesEl.innerText = `${guesses} guesses`;
	if (clickedEl.value === choicesEditable[randomizedChoice].name) {
		//do next round
		//better than last round?
		let failedGuessesLastRound =
			choiceLog.length != 0
				? choiceLog[choiceLog.length - 1].failedGuesses
				: failedGuesses;
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
		choiceLog.push({
			...choicesEditable[randomizedChoice],
			round: 1,
			failedGuesses: failedGuesses,
		});

		failedGuesses = 0;
		let progress = Math.round(
			(1 - (choicesEditable.length - 1) / choices.length) * 100
		);
		progressEl.innerText = `${progress}% complete`;

		choicesEditable = choicesEditable
			.map((choice) => {
				return {
					name: choice.name,
					url: choice.url,
				};
			})
			.filter((choice) => choice.name !== clickedEl.value);
		console.log(choicesEditable);

		toggleGameScreen();
	} else if (!clickedEl.classList.contains("incorrect-guess")) {
		clickedEl.classList.add("incorrect-guess");
		failedGuesses++;
	}
};

gameContainer.addEventListener("click", (e) => {
	const clickedEl = e.target;
	classListEl = clickedEl.classList;
	if (classListEl.contains("startGame")) {
		toggleGameScreen();
		introduction.classList.toggle("hideElement");
		game.classList.toggle("showElement");
		return;
	}
	if (classListEl.contains("choiceButton")) {
		let id = Number(clickedEl.id[clickedEl.id.length - 1]);
		checkGuess(clickedEl, id);
		return;
	}

	if (classListEl.contains("restartBtn")) {
		choicesEditable = setChoicesEditable();
		totalGuessesEl.innerText = "0 guesses";
		progressEl.innerText = "0% progress";
		//clear logs
		choiceLog.splice(0, choiceLog.length);
		toggleGameScreen();
	}

	if (classListEl.contains("resultsBtn")) {
		console.log("results");
		showResults();
	}
});
