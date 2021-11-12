/**
 * Ultimate TODOs
 *
 * 1. Sortera todos baserat på titel
 *
 * 2. Filtrera todos så ni har två listor, en med saker som är kvar att göra,
 * och en lista med avklarade saker.
 *
 * 3. Rendera ut varje TODO's ID till DOM istället för dess array-index.
 *
 * 4. Uppdatera click-eventhandler:n så att den hämtar ID från förälderns
 * data-attribut istället för index. Använd sedan detta ID för att hitta rätt
 * TODO i `todos`-array:en.
 *
 * 5. (extra utmaning)
 * När man skapar en ny TODO, se om du kan få till en funktion som hämtar ut
 * det högsta ID som finns och tar +1 på det, och använder det talet som den
 * nya TODO:ns ID.
 *
 */

// get references to DOM elements
const todosEl = document.querySelector("#todos");
const todosDoneEl = document.querySelector("#todos-done");
const allTodosEl = document.querySelector(".all-todos");
const newTodoFormEl = document.querySelector("#new-todo-form");

// list of todos
const todos = [
    {
        id: 1,
        title: "eat",
        completed: false,
    },
    {
        id: 2,
        title: "Code",
        completed: true,
    },
    {
        id: 3,
        title: "Sleep",
        completed: false,
    },
    {
        id: 4,
        title: "Repeat",
        completed: false,
    },
];

todos.sort((a, b) => {
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
        return -1;
    }
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1;
    }

    return 0;
});

console.log(todos);

const renderTodos = () => {
    // empty UL of todos
    todosEl.innerHTML = "";
    todosDoneEl.innerHTML = "";

    // render todos to DOM
    todos.forEach((todo, i) => {
        const todoRef = todo.completed ? todosDoneEl : todosEl;
        // if todo is completed, add "completed" to CSS classes
        const cssClasses = "list-group-item";

        // Append a LI-element to the UL
        todoRef.innerHTML += `
			<li class="${cssClasses}" data-index="${i}">
				${todo.title}
				<button class="ms-2 btn btn-sm btn-danger">🚮</button>
			</li>
		`;
    });
};

// render (initial list of) todos
renderTodos();

newTodoFormEl.addEventListener("submit", (e) => {
    // stop form from being submitted to the web server
    // and hence causing a page reload 😨
    e.preventDefault();

    // get todo to add to list of todos
    const newTodoDescription = e.target.newTodo.value;

    // empty input
    e.target.newTodo.value = "";

    // create a object for the new todo
    const newTodo = {
        title: newTodoDescription,
        completed: false,
    };

    // add todo to array of todos
    todos.push(newTodo);

    // render todos
    renderTodos();
});

newTodoFormEl.addEventListener("reset", (e) => {
    // OH NO YOU NOT RESET FORM, FORM RESETS YOU!
    // e.preventDefault();
    // alert("Oh no you didn't");

    alert("Good job cleaning! 👍🏻");
});

// react to when user clicks on something in our TODO list
allTodosEl.addEventListener("click", (e) => {
    console.log(`You clicked on a ${e.target.tagName} element`, e.target);

    // check if user clicked on a LI element
    if (e.target.tagName === "LI") {
        // find index of todo
        const index = e.target.dataset.index;

        // change completed-status of todo
        todos[index].completed = !todos[index].completed;

        // Render todos
        renderTodos();
    } else if (e.target.tagName === "BUTTON") {
        // How to find the clicked todo in our array,
        // and then remove it from the array?
        const buttonEl = e.target;
        const liEl = buttonEl.parentElement;
        const index = liEl.dataset.index; // data-index=""

        // shorter version of above 3 lines
        // const index = e.target.parentElement.dataset.index;

        // Remove item with index from array
        todos.splice(index, 1);

        // Render todos
        renderTodos();
    }
});
