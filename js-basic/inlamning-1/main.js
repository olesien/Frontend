const gameContainer = document.querySelector("#gameContainer");
const introduction = document.querySelector(".introduction");
const game = document.querySelector(".game");
//const choiceButtonEl = document.querySelector(".choiceButton");
const choicesEl = document.querySelector("#choices");

const choices = [
    { name: "Sarah", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
    { name: "Adam", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
    { name: "Robin", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
    { name: "Tivi", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
    { name: "Samuel", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
    { name: "Jessica", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
    { name: "Rick", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
];

let choicesEditable = choices;

let randomizedChoice = -1;
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const toggleGameScreen = () => {
    //start the game
    randomizedChoice = getRandomInt(choicesEditable.length);
    console.log(choicesEditable[randomizedChoice]);
    game.querySelector("img").src = choices[randomizedChoice].url;

    //USE HTML, NEEDS TO RERENDER!
    let choiceArray = Array.from(game.getElementsByClassName("choice"));

    let choicesCopy = choicesEditable;

    // let randomizedPicks = choiceButtonArray.forEach(choice => {

    // })

    let placementIndex = getRandomInt(choiceArray.length);
    choicesEl.innerHTML = "";

    const choiceElementMap = choiceArray.map((choiceEl, index) => {
        let name = "";
        if (placementIndex === index) {
            name = choices[randomizedChoice].name;
        } else {
            let filteredChoices = choicesCopy.filter(
                (choice) =>
                    !choice?.picked == true &&
                    choice.name !== choicesEditable[randomizedChoice].name
            );
            console.log(filteredChoices);
            let randomChoice = getRandomInt(filteredChoices.length);
            console.log(filteredChoices[randomChoice]);
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
    if (clickedEl.value === choicesEditable[randomizedChoice].name) {
        alert("correct");
        //do next round
        console.log(
            choicesEditable.filter((choice) => choice.name !== clickedEl.value)
        );
        choicesEditable = choicesEditable.filter(
            (choice) => choice.name !== clickedEl.value
        );

        toggleGameScreen();
    } else if (!clickedEl.classList.contains("incorrect-guess")) {
        alert("incorrect");
        clickedEl.classList.add("incorrect-guess");
    }
};

gameContainer.addEventListener("click", (e) => {
    const clickedEl = e.target;
    if (clickedEl.classList.contains("startGame")) {
        toggleGameScreen();
        introduction.classList.toggle("hideElement");
        game.classList.toggle("showElement");
        return;
    }
    if (clickedEl.classList.contains("choiceButton")) {
        let id = Number(clickedEl.id[clickedEl.id.length - 1]);
        checkGuess(clickedEl, id);
        return;
    }
});
