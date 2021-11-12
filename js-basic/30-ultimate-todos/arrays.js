const friends = [
    { name: "John", grade: 2, year: 3, sex: "M" },
    { name: "Sarah", grade: 3, year: 2, sex: "F" },
    { name: "Bob", grade: 3, year: 5, sex: "M" },
    // { grade: 1, year: 42, sex: 'Alien' },
    { name: "Johnny", grade: 2, year: 2, sex: "M" },
    { name: "Ethan", grade: 4, year: 1, sex: "M" },
    { name: "Paula", grade: 4, year: 5, sex: "F" },
    { name: "Donald", grade: 5, year: 5, sex: "M" },
    { name: "Jennifer", grade: 3, year: 3, sex: "F" },
    { name: "Courtney", grade: 3, year: 1, sex: "F" },
    { name: "Jane", grade: 4, year: 3, sex: "F " },
];

// 1. get the names of all friends in year 3
console.log(
    friends.filter((person) => person.year === 3).map((person) => person.name)
);

// 2. get the names of all male friends in year 5
console.log(
    friends
        .filter((person) => {
            return person.year === 5 && person.sex === "M";
        })
        .map((person) => person.name)
);
