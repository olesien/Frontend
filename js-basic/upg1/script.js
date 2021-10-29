/**
 * Workshop: Password Checker
 *
 * Link: https://teams.microsoft.com/l/message/19:ee60e4662a5a4a95babd494649401fdc@thread.tacv2/1634737231314?tenantId=1f14a049-d614-4ea3-8d0d-040443a8bc19&groupId=10a26e5b-f1f9-4c41-892c-ba5f3e43d8ba&parentMessageId=1634737231314&teamName=FED21M&channelName=JavaScript%20Grundkurs-%2065%20Yhp&createdTime=1634737231314
 */

let passwords = 'secretAAAA';
//password = "password"; // inte giltigt
//password = "p@ssw%rd"; // giltigt
//password = "pa$$word"; // giltigt
//password = "secretpassword"; // inte giltigt
//password = "secret-password"; // giltigt
//password = "such-password-much-secure-very-long"; // giltigt

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

let specialCharsCount = 0;
let lineCharsCount = 0;

for (let passI = 0; passI < password.length; passI++) {
    let passChar = password[passI];
    if (passChar == "-") {
        lineCharsCount++;
    }
    for (let specialI = 0; specialI < specialChars.length; specialI++) {
        let specialChar = specialChars[specialI];
        if (passChar === specialChar) {
            specialCharsCount++;
        }
    }
}

if (password.length >= 16) {
    console.log("Good password!");
} else if (password.length >= 12 && lineCharsCount > 0) {
    console.log("Good password!");
} else if (password.length >= 8 && specialCharsCount > 0) {
    console.log("Good password!");
} else {
    console.log("Bad password!");
}
