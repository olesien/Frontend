// 1. Sortera todos baserat på titel

// 2. Filtrera todos så ni har två listor, en med saker som är kvar att göra, och en lista med avklarade saker.

// 3. Rendera ut varje TODO's ID till DOM istället för dess array-index.

// 4. Uppdatera click-eventhandler:n så att den hämtar ID från förälderns data-attribut istället för index. Använd sedan detta ID för att hitta rätt TODO i `todos`-array:en.

// 5. (extra utmaning)
// När man skapar en ny TODO, se om du kan få till en funktion som hämtar ut det högsta ID som finns och tar +1 på det, och använder det talet som den nya TODO:ns ID.

const todos = [
    { name: "clean dishes", checked: false },
    { name: "invade china", checked: false },
    { name: "aspire wisdom", checked: true },
];

todos.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

const finishedTodos = todos.filter((e) => e.checked);
const todosLeft = todos.filter((e) => !e.checked);

console.log(finishedTodos, todosLeft);
