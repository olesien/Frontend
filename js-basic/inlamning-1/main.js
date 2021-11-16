const gameContainer = document.querySelector("#gameContainer");
const introduction = document.querySelector(".introduction");
const game = document.querySelector(".game");
//const choiceButtonEl = document.querySelector(".choiceButton");
const choicesEl = document.querySelector("#choices");

const cheatEl = document.querySelector("#cheat");

const totalGuessesEl = document.querySelector(".totalGuesses");

const progressEl = document.querySelector(".progress");

const choices = [
    { name: "Sarah", url: "./images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
    {
        name: "Adam",
        url: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    },
    {
        name: "Robin",
        url: "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
    },
    {
        name: "Tivi",
        url: "https://cdn.mos.cms.futurecdn.net/KYEJp9vem3QQFGhi25SYx4-1200-80.jpg",
    },
    {
        name: "Samuel",
        url: "https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552_square.jpg",
    },
    {
        name: "Jessica",
        url: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
    },
    {
        name: "Rick",
        url: "https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552_square.jpg",
    },
];

let guesses = 0;

let choicesEditable = choices.map((obj) => {
    return { name: obj.name, url: obj.url };
});

let randomizedChoice = -1;
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const toggleGameScreen = () => {
    //start the game
    if (choicesEditable.length == 0) {
        alert("You win");
        return;
    }
    randomizedChoice = getRandomInt(choicesEditable.length);
    console.log(
        "HI YES I AM CHEATING!!!!!!!!!!!!!!!! --- ",
        choicesEditable[randomizedChoice]
    );
    cheatEl.innerText = choicesEditable[randomizedChoice].name;
    console.log(choicesEditable);

    //USE HTML, NEEDS TO RERENDER!
    let choiceArray = Array.from(game.getElementsByClassName("choice"));

    let choicesCopy = choices.map((obj) => {
        return { name: obj.name, url: obj.url };
    });

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
        //do next round'
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
