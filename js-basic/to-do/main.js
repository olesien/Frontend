const todoEl = document.querySelector("#todo");
const addTodoEl = document.querySelector("#add-todo");
const addTodoButtonEl = document.querySelector("#add-todo-button");

addTodoButtonEl.addEventListener("click", () => {
	let addTodoText = addTodoEl.value;
	if (addTodoText.length < 2) {
		alert("Not long enough!");
		return;
	}
	let child = document.createElement("LI");

	child.innerHTML = `<p>${addTodoText}</p>`;

	child.addEventListener("click", () => {
		child.querySelector("p").classList.toggle("crossed-out");
	});

	let buttonEl = document.createElement("input");
	buttonEl.type = "button";
	buttonEl.value = "Remove task";
	buttonEl.addEventListener("click", (e) => {
		e.stopPropagation();
		let parent = buttonEl.parentElement;
		parent.remove();
	});
	child.appendChild(buttonEl);

	todoEl.appendChild(child);
	todoEl.insertBefore(child, todoEl.firstChild);
	addTodoEl.value = "";
});
