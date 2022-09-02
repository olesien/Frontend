/**
 * 1. Higher Order Array Methods.
 *
 * Här ska du använda dig av Higher Order Array-funktionerna nedan.
 * Du ska *inte* nyttja `.forEach()`!
 *
 * `Array.filter()`
 * `Array.map()`
 * `Array.sort()`
 * `Array.reduce()`
 *
 * Alla funktioner finns definierade och ska färdigställas i den här filen.
 *
 * Funktionerna kommer att bli körda *automatiskt* och få friends-array:en
 * nedan som parameter.
 *
 */

/**
 * Nedan är en representation av en grupp elever som alla är vänner
 *
 * `grade` representerar deras betyg (1-5)
 * `year` representerar vilken årskurs de går i
 *
 */

//Dummy data
const friends = [
    { name: "John", grade: 2, year: 3, sex: "M" },
    { name: "Sarah", grade: 3, year: 2, sex: "F" },
    { name: "Bob", grade: 3, year: 5, sex: "M" },
    { name: "Johnny", grade: 2, year: 2, sex: "M" },
    { name: "Ethan", grade: 4, year: 1, sex: "M" },
    { name: "Paula", grade: 4, year: 5, sex: "F" },
    { name: "Donald", grade: 5, year: 5, sex: "M" },
    { name: "Jennifer", grade: 3, year: 3, sex: "F" },
    { name: "Courtney", grade: 3, year: 1, sex: "F" },
    { name: "Jane", grade: 4, year: 3, sex: "F " },
];

/**
 * 1.1. Funktionerna getBoys() och getGirls() ska returnera antalet pojkar
 * respektive antalet flickor. [3p]
 *
 */

const getBoysCount = (kids) => {
    // Filter through the kids array, and make sure each kid has the property M as sex.
    return kids.filter((kid) => kid.sex === "M").length;
};

const getGirlsCount = (kids) => {
    // Filter through the kids array, and make sure each kid has the property F as sex.
    return kids.filter((kid) => kid.sex === "F").length;
};

/**
 * 1.2. Funktionerna getNamesOfAllBoys() och getNamesOfAllGirls() ska returnera
 * varsin _array_ med alla pojkars namn respektive alla flickors namn. [4p]
 *
 */

const getNamesOfAllBoys = (kids) => {
    // First Filter through the kids array, and make sure each kid has the property M as sex. Then map over the newly formed array and it it an array of names purely.
    return kids.filter((kid) => kid.sex === "M").map((kid) => kid.name);
};

const getNamesOfAllGirls = (kids) => {
    // First Filter through the kids array, and make sure each kid has the property F as sex. Then map over the newly formed array and it it an array of names purely.
    return kids.filter((kid) => kid.sex === "F").map((kid) => kid.name);
};

/**
 * 1.3. Funktionen getAvgGrade() ska räkna ut det genomsnittliga betyget för
 * alla elever. [4p]
 *
 */

const getAvgGrade = (kids) => {
    //Using a reducer, here the total will be slowly increased by every kids grade as it iterates through the array
    const sumOfGrades = kids.reduce((total, kid) => {
        return total + kid.grade;
    }, 0);
    //This is then returned, but divided by the length of the array to give an average value
    return sumOfGrades / kids.length;
};

/**
 * 1.4. Funktionen getAvgGradeForAllGirls() ska räkna ut det genomsnittliga
 * betyget bland alla flickor. [6p]
 *
 */

const getAvgGradeForAllGirls = (kids) => {
    // Filter so that the array only contains the girls
    const girls = kids.filter((kid) => kid.sex === "F");
    //Using a reducer, here the total will be slowly increased by every girls grade as it iterates through the array
    const sumOfGrades = girls.reduce((total, kid) => {
        return total + kid.grade;
    }, 0);
    //This is then returned, but divided by the length of the girl array to give an average value
    return sumOfGrades / girls.length;

    //Note: It would be possible to combine the filter and reduce array into only one reduce array, but I opted not to in this case for clarities sake.
    //Here's how I would replace sumOfGrades and girls if I wanted to do that:
    // let totalKids = 0;
    // const sumOfGrades = kids.reduce((total, kid) => {
    //     if (kid.sex === "F") {
    //         totalKids++;
    //         return total + kid.grade;
    //     } else {
    //         return total;
    //     }
    // }, 0);
    // return sumOfGrades / totalKids;
};

/**
 * 1.5. Funktionen getAvgGradeForYear() ska ta kunna ut alla elever för en viss
 * årskull och räkna ut det genomsnittliga betyget för dem. [8p]
 *
 * Din funktion ska returnera "0" i genomsnittligt betyg om det inte finns
 * några elever i den årskursen man efterfrågar.
 *
 * Den här funktionen kommer att automatiskt bli kallad fem gånger, en gång för
 * varje årskull mellan 1-5.
 *
 */

const getAvgGradeForYear = (kids, year) => {
    // Filter so that the array only contains the kids for that year
    const kidsOneYear = kids.filter((kid) => kid.year === year);
    //Using a reducer, here the total will be slowly increased by every kids grade as it iterates through the array
    const sumOfGrades = kidsOneYear.reduce((total, kid) => {
        return total + kid.grade;
    }, 0);
    //If the above list was not empty, this is then returned but divided by the length of the girl array to give an average value
    return sumOfGrades > 0 ? sumOfGrades / kidsOneYear.length : 0;

    //Note: It would be possible to combine the filter and reduce array into only one reduce array, but I opted not to in this case for clarities sake.
    //Here's how I would replace sumOfGrades and kidsOneYear if I wanted to do that:
    // let totalKids = 0;
    // const sumOfGrades = kids.reduce((total, kid) => {
    //     if (kid.year === year) {
    //         totalKids++;
    //         return total + kid.grade;
    //     } else {
    //         return total;
    //     }
    // }, 0);
    // return sumOfGrades > 0 ? sumOfGrades / totalKids : 0;
};

/**
 * 1.6. Funktionen getNameOfStudentWithHighestGrade() ska returnera namnet på
 * den elev som har det högsta betyget. [5p]
 *
 */

const getNameOfStudentWithHighestGrade = (kids) => {
    // Ändra endast här
    return kids.sort((a, b) => b.grade - a.grade)[0].name;
};
