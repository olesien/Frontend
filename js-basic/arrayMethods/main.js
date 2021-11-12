let todos = [
	{
		name: "test",
		id: 1,
	},
	{
		name: "test2",
		id: 2,
	},
];

let max = 0;
const maxId = todos.reduce((max, todo) => {
	return todo.id > max ? todo.id : max;
}, 0);
console.log(max, maxId);

console.log(todos.map((todo) => todo.id));
const maxId2 = Math.max(...todos.map((todo) => todo.id));
console.log(maxId2);
