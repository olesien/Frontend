const gameContainer = document.querySelector("#gameContainer");
const introduction = document.querySelector(".introduction");
const game = document.querySelector(".game");

const choices = [
    { name: "Sarah", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
];

let choicesButtonsCount = 5;

let randomizedChoice = -1;

const toggleGameScreen = () => {
    if (!game.classList.contains("showElement")) {
        //start the game
<<<<<<< Updated upstream
        game.querySelector("img").src =
            "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg";
        
=======
        randomizedChoice = getRandomInt(choices.length);
        console.log(choices[randomizedChoice]);
        game.querySelector("img").src = choices[randomizedChoice].url;

        //USE HTML, NEEDS TO RERENDER!
        // let choiceButtonArray = Array.from(
        //     game.getElementsByClassName("choice")
        // );

        let choicesCopy = choices;

        // let randomizedPicks = choiceButtonArray.forEach(choice => {

        // })

        let placementIndex = getRandomInt(choicesButtonsCount);
        choicesEl.innerHTML = "";

        for (let index = 0; index < choicesButtonsCount; index++) {
            let name = "";
            if (placementIndex === index) {
                name = choices[randomizedChoice].name;
            } else {
                let filteredChoices = choicesCopy.filter(
                    (choice) =>
                        !choice?.picked == true &&
                        choice.name !== choices[randomizedChoice].name
                );
                console.log(filteredChoices);
                let randomChoice = getRandomInt(filteredChoices.length);
                filteredChoices[randomChoice].picked = true;
                name = filteredChoices[randomChoice].name;
                choicesCopy = filteredChoices;
            }
            choicesEl.innerHTML += `<li class="choice">
            <input type="button" value="${name}" class="choiceButton" id="choice-${
                index + 1
            }">
        </li>`;
        }
>>>>>>> Stashed changes
    }
    introduction.classList.toggle("hideElement");
    game.classList.toggle("showElement");
};

const checkGuess = (clickedEl, id) => {};

gameContainer.addEventListener("click", (e) => {
    const clickedEl = e.target;
    if (clickedEl.classList.contains("startGame")) {
        toggleGameScreen();
        return;
    }
    if (clickedEl.classList.contains("choiceButton")) {
        let id = Number(clickedEl.id[clickedEl.id.length - 1]);
        checkGuess(clickedEl, id);
        return;
    }
});
