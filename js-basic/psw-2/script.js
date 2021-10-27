/**
 * Workshop: Password Checker using Functions
 *
 * Skriv om lösenordskollen till att använda funktioner (inkl. forEach) och
 * kollar en lista av lösenord.
 *
 * Ni ska ha en funktion som tar emot ett lösenord och validerar det. Den ska
 * returnera true om det är ett tillräckligt säkert lösenord, eller false om
 * det inte uppfyller kraven.
 *
 * Varje lösenord ska console.log’as tillsammans med dess resultat.
 *
 *
 * ROADMAP
 *
 * 1. Skapa en array som alla lösenord ligger i.
 *
 * 2.1. Flytta logiken som kollar om lösenordet uppfyller kraven till en egen
 * funktion.
 *
 * 2.2. Kalla på funktionen en gång för varje lösenord i array:en och skicka
 * med lösenordet till funktionen.
 *
 * 3. Ändra så att funktionen returnerar true/false istället för att logga till
 * konsollen.
 *
 */

let passwords = ["psw1", "pswjuhuhhuhuhui.-2", "psw3"];

const specialChars = [
    "@",
    "$",
    "%",
    "*",
    "^",
    "<",
    ">",
    "?",
    "!",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "'",
];

const passwordChecker = (password) => {
    let specialCharsCount = 0;
    let lineCharsCount = 0;

    // for (let passI = 0; passI < password.length; passI++) {
    // 	let passChar = password[passI];
    // 	if (passChar == "-") {
    // 		lineCharsCount++;
    // 	}
    // 	for (let specialI = 0; specialI < specialChars.length; specialI++) {
    // 		let specialChar = specialChars[specialI];
    // 		if (passChar === specialChar) {
    // 			specialCharsCount++;
    // 		}
    // 	}
    // }
    for (let specialI = 0; specialI < specialChars.length; specialI++) {
        let specialChar = specialChars[specialI];
        if (password.includes(specialChar)) {
            specialCharsCount++;
        }
    }
    if (password.includes("-")) {
        lineCharsCount++;
    }

    if (password.length >= 16) {
        return true;
    } else if (password.length >= 12 && lineCharsCount > 0) {
        return true;
    } else if (password.length >= 8 && specialCharsCount > 0) {
        return true;
    } else {
        return false;
    }
};

passwords.forEach((password) => {
    let isSafe = passwordChecker(password);

    console.log(
        `The password ${password} is considered ${isSafe ? "good" : "bad"}!`
    );
});
