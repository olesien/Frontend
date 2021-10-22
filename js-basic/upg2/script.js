// Steg 1

// Sätt ett tal i en variabel. Be användaren att gissa talet. Om det är fel, fråga igen. Om det är rätt, visa en alert med ett grattis-meddelande. Om användaren skriver in talet 0 så ska spelet avslutas.

// Steg 1.5

// Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis ska de få gissa igen efter detta.

// Steg 2

// Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.

// Steg 3

// Spara ner hur många gissningar som krävdes. Visa antalet gissningar när användaren gissat rätt.

// Steg 4

// Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet på nytt. Spara en "highscore",
// dvs hur få gånger som krävts för att gissa rätt. Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på ${tries} antal försök men din highscore är ${highscore}". Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}".

let rightNumber = Math.floor(Math.random() * 100) + 1;

let guesses = 0;
let highscore = 0;

let coreMessage = "Guess the number (range: 1 to 100)! ";

console.log("Right number: " + rightNumber);

let nextMessage = "";

while (true) {
    let message;
    if (guesses == 0) {
        message = coreMessage;
    } else {
        message = coreMessage + nextMessage;
    }
    guesses++;
    let result = window.prompt(message, "");
    if (result == "0") {
        break;
    }
    console.log(parseInt(result), rightNumber);
    if (parseInt(result) == rightNumber) {
        if (highscore == 0 || guesses <= highscore) {
            alert(`Wow you guessed it right! That took ${guesses} guesses! `);
            highscore = guesses;
        } else {
            alert(
                `Oh sorry but sadly you used ${guesses} guesses! Your highscore is ${highscore}`
            );
        }

        guesses = 0;
        rightNumber = Math.floor(Math.random() * 100) + 1;
        //console.log("Hey");
        continue;
    }

    if (parseInt(result) > rightNumber) {
        nextMessage = " Your previous attempt was too high";
    } else {
        nextMessage = " Your previous attempt was too low";
    }
    console.log(result);
}
