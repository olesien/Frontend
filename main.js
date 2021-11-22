const gameContainer = document.querySelector("#gameContainer");
const introduction = document.querySelector(".introduction");
const game = document.querySelector(".game");
//const choiceButtonEl = document.querySelector(".choiceButton");
const choicesEl = document.querySelector("#choices");

const cheatEl = document.querySelector("#cheat");

const totalGuessesEl = document.querySelector(".totalGuesses");

const progressEl = document.querySelector(".progress");

const comparedToLastRoundEl = document.querySelector(".comparedToLastRound");

const resultsEl = document.querySelector("#results");

const choices = [
    {
        name: "Adi Dzocaj",
        url: "images/students/adi-dzocaj.jpg",
    },
    {
        name: "Alexander Bergquist",
        url: "images/students/alexander-bergquist.jpg",
    },
    {
        name: "Alexander Kocman",
        url: "images/students/alexander-kocman.jpg",
    },
    {
        name: "Benjamin Benson",
        url: "images/students/benjamin-benson.jpg",
    },
    {
        name: "Benjamin Tsubarah",
        url: "images/students/benjamin-tsubarah.jpg",
    },
    {
        name: "Calle Nilsson",
        url: "images/students/calle-nilsson.jpg",
    },
    {
        name: "Chikage Takahashi Molander",
        url: "images/students/chikage-takahashi-molander.jpg",
    },
    {
        name: "Daniel Be",
        url: "images/students/daniel-be.jpg",
    },
    {
        name: "Daniel Carlsson",
        url: "images/students/daniel-carlsson.jpg",
    },
    {
        name: "Elin Ahlgren",
        url: "images/students/elin-ahlgren.jpg",
    },
    {
        name: "Emma Käck",
        url: "images/students/emma-kack.jpg",
    },
    {
        name: "Eric Ståhl",
        url: "images/students/eric-stahl.jpg",
    },
    {
        name: "Frans Gustavson Påsse",
        url: "images/students/frans-gustavson-passe.jpg",
    },
    {
        name: "Glafira Veretennikova",
        url: "images/students/glafira-veretennikova.jpg",
    },
    {
        name: "Gustaf Grönlund",
        url: "images/students/gustaf-gronlund.jpg",
    },
    {
        name: "Hanna Håkanson",
        url: "images/students/hanna-hakanson.jpg",
    },
    {
        name: "Heidi Sjöberg",
        url: "images/students/heidi-sjoberg.jpg",
    },
    {
        name: "Hugo Carzborn",
        url: "images/students/hugo-carzborn.jpg",
    },
    {
        name: "Jesper Kling",
        url: "images/students/jesper-kling.jpg",
    },
    {
        name: "Johan Ranestam",
        url: "images/students/johan-ranestam.jpg",
    },
    {
        name: "Johanna Bäckström",
        url: "images/students/johanna-backstrom.jpg",
    },
    {
        name: "Johanna Jönsson",
        url: "images/students/johanna-jonsson.jpg",
    },
    {
        name: "Jona Torsson",
        url: "images/students/jona-torsson.jpg",
    },
    {
        name: "Josefine Ahlstedt",
        url: "images/students/josefine-ahlstedt.jpg",
    },
    {
        name: "Julia Jespersdotter Högman",
        url: "images/students/julia-jespersdotter-hogman.jpg",
    },
    {
        name: "Julia Nemell",
        url: "images/students/julia-nemell.jpg",
    },
    {
        name: "Linus Lindberg",
        url: "images/students/linus-lindberg.jpg",
    },
    {
        name: "Malin Olsson",
        url: "images/students/malin-olsson.jpg",
    },
    {
        name: "Maria Haara-Lundhammar",
        url: "images/students/maria-haara-lundhammar.jpg",
    },
    {
        name: "Maria Lövgren",
        url: "images/students/maria-lovgren.jpg",
    },
    {
        name: "Nikola Dimitrijoski",
        url: "images/students/nikola-dimitrijoski.jpg",
    },
    {
        name: "Paulina Kiendys",
        url: "images/students/paulina-kiendys.jpg",
    },
    {
        name: "Raymond Lam",
        url: "images/students/raymond-lam.jpg",
    },
    {
        name: "Robin Karlsson",
        url: "images/students/robin-karlsson.jpg",
    },
    {
        name: "Sara Almqvist",
        url: "images/students/sara-almqvist.jpg",
    },
    {
        name: "Tim Nilsson",
        url: "images/students/tim-nilsson.jpg",
    },
    {
        name: "Tirapat Sukjit",
        url: "images/students/tirapat-sukjit.jpg",
    },
    {
        name: "Tobias Silfverberg",
        url: "images/students/tobias-silfverberg.jpg",
    },
    {
        name: "Wiktoria Dobrzewinska",
        url: "images/students/wiktoria-dobrzewinska.jpg",
    },
];

const choiceLog = [];

let guesses = 0;
let failedGuesses = 0;
//let guessesRound = 0;

const setChoicesEditable = () => {
    return choices.map((obj) => {
        return { name: obj.name, url: obj.url, picked: false };
    });
};

let choicesEditable = setChoicesEditable();

let randomizedChoice = -1;
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const showResults = () => {
    let returnHTML = choiceLog.map(
        (choice, index) =>
            `<li><img src="${choice.url}"><p>${choice.name}<p>Failed Guesses: ${
                choice.failedGuesses
            }</p><p>Round: ${index + 1}</p</li>`
    );
    resultsEl.innerHTML = returnHTML;
};

const toggleGameScreen = () => {
    //start the game
    if (choicesEditable.length == 0) {
        alert("You win");
        return;
    }
    // if (guessesRound != 0) {
    // 	comparedToLastRoundEl.innerText = guessesRound;
    // }

    guessesRound = 0;
    randomizedChoice = getRandomInt(choicesEditable.length);
    console.log(
        "HI YES I AM CHEATING!!!!!!!!!!!!!!!! --- ",
        choicesEditable[randomizedChoice]
    );
    cheatEl.innerText = choicesEditable[randomizedChoice].name;
    console.log(choicesEditable);

    //USE HTML, NEEDS TO RERENDER!
    let choiceArray = Array.from(game.getElementsByClassName("choice"));

    let choicesCopy = setChoicesEditable();

    // let randomizedPicks = choiceButtonArray.forEach(choice => {

    // })

    let placementIndex = getRandomInt(choiceArray.length);
    choicesEl.innerHTML = "";

    const choiceElementMap = choiceArray.map((choiceEl, index) => {
        let name = "";
        if (placementIndex === index) {
            game.querySelector("img").src =
                choicesEditable[randomizedChoice].url;
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
            comparedToLastRoundEl.innerText =
                "That was way better than last round!";
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
