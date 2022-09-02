/**
 * JavaScript 1, tenta 2 (omtenta)
 *
 * Main app.
 *
 */


/**
 *
 * 1. Higher Order Array Methods
 *
 */


/**
 * 1.1
 */
let boysCount = getBoysCount(friends);
let girlsCount = getGirlsCount(friends);

renderAnswer('1-1-boys', boysCount);
renderAnswer('1-1-girls', girlsCount);


/**
 * 1.2
 */

let boyNames = getNamesOfAllBoys(friends);
let girlNames = getNamesOfAllGirls(friends);

renderAnswer('1-2-boynames', boyNames, arrayToUnorderedList);
renderAnswer('1-2-girlnames', girlNames, arrayToUnorderedList);


/**
 * 1.3
 */

let avgGrade = getAvgGrade(friends);

renderAnswer('1-3-avg-grade', avgGrade);


/**
 * 1.4
 */

let avgGradeGirls = getAvgGradeForAllGirls(friends);

renderAnswer('1-4-avg-grade', avgGradeGirls);


/**
 * 1.5
 */

let avgGradeYear1 = getAvgGradeForYear(friends, 1);
let avgGradeYear2 = getAvgGradeForYear(friends, 2);
let avgGradeYear3 = getAvgGradeForYear(friends, 3);
let avgGradeYear4 = getAvgGradeForYear(friends, 4);
let avgGradeYear5 = getAvgGradeForYear(friends, 5);

renderAnswer('1-5-year-1', avgGradeYear1);
renderAnswer('1-5-year-2', avgGradeYear2);
renderAnswer('1-5-year-3', avgGradeYear3);
renderAnswer('1-5-year-4', avgGradeYear4);
renderAnswer('1-5-year-5', avgGradeYear5);


/**
 * 1.6
 */

let bestStudent = getNameOfStudentWithHighestGrade(friends);

renderAnswer('1-6-best-student', bestStudent);


/**
 *
 * 2. Async
 *
 */


/**
 * 2.1.
 */

document.querySelector('#btnSurprise').addEventListener('mouseover', () => {
	animateCSS('#btnSurprise', 'tada');
});
document.querySelector('#btnSurprise').addEventListener('click', () => {
	btnSurpriseMe();
});

