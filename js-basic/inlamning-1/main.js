const gameContainer = document.querySelector("#gameContainer");
const introduction = document.querySelector(".introduction");
const game = document.querySelector(".game");

const choices = [
    { name: "Sarah", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
];

let randomizedChoice = -1;

const toggleGameScreen = () => {
    if (!game.classList.contains("showElement")) {
        //start the game
        game.querySelector("img").src =
            "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg";
        
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
