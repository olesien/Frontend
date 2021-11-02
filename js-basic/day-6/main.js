let persons = {
	cat: {
		speed: 16,
		dexteriy: 20,
		speed: 30,
		strength: 2,
	},
};

console.table(persons);

let user = "johan"; //string literal

//object literal notation
const fluffles = {
	//key/value pair
	name: "Mr fluffles",
	age: 3,
	owner: "Bengt",
	hobbies: "annoy people",
	species: "cat",
	invade: function () {
		//dot notation
		console.log(this.owner);
	},
};
fluffles.invade();
