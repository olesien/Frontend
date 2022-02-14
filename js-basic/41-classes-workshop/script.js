/**
 * Classes workshop
 *
 * Instanser av Todo-klassen måste ha en titel (title) och som standard ska de
 * vara ej avklarade. Det ska finnas metoder för att hämta ut titel
 * (`getTitle()`), veta om todo:n är avklarad eller ej (`isCompleted`), samt
 * både markera todo:n som avklarad (`setCompleted()`) och som ej avklarad
 * `setIncomplete()`.
 *
 * 1. Skapa en lista som du skapar ett antal Todo-objekt i.
 *
 * 2. Sätt några av objekten i listan till avklarade (efter att du skapat dem
 * och lagt dem i listan).
 *
 * 3. Loopa över listan och skriv ut till konsolen titel för varje todo samt om
 * den är avklarad eller ej.
 *
 * Om du hinner klart, se om du kan skapa en klass för todo-listan, så att vi
 * kan ha flera olika listor som var och en kan ha Todo-objekt i sig.
 * Listan ska som standard vara tom, samt ha metoderna `addTodo()`,
 * `getTodos()` och `sortTodos()`.
 *
 */

class Todo {
    completed = false;
    constructor(title) {
        this.title = title;
    }
    get getTitle() {
        return this.title;
    }

    get isCompleted() {
        return this.completed;
    }

    setCompleted() {
        this.completed = true;
    }
    setIncomplete() {
        this.completed = false;
    }
}

class Todos {
    //Add a new todo etc
    constructor(listName) {
        this[listName] = new Array();
    }
    addTodo(listName, title) {
        this[listName].push(new Todo(title));
    }

    get getTodos() {
        return this;
    }

    sortTodos(listName) {
        console.log("will sort");
        console.log(
            this[listName].sort(function (a, b) {
                let nameA = a.title.toUpperCase(); // ignore upper and lowercase
                let nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            })
        );
    }
}

const todoObject = new Todos("list");

todoObject.addTodo("list", "A Invade USSR");
todoObject.addTodo("list", "C Invade China");
todoObject.addTodo("list", "B Invade USA");

todoObject.sortTodos("list");
// todoList[1].setCompleted();
// todoList[2].setCompleted();
// todoList[2].setIncomplete();
//console.log(todoList);
todoObject.getTodos["list"].forEach((task) =>
    console.log(task.getTitle, task.isCompleted)
);

class Vehicle {
    constrctuor(manufacturer, model, year) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
    }
}

class MotorVehicle extends Vehicle {
    hasEngine = true;
    constrctuor(manufacturer, model, year, horsePower) {
        super(manufacturer, model, year);

        this.horsePower = horsePower;
    }
}

class Car extends MotorVehicle {
    wheels = 4;

    // constrctuor(manufacturer, model, year, horsePower) {
    //     super(manufacturer, model, year, horsePower)
    // }
}

class MotorCycle extends MotorVehicle {
    wheels = 2;
}

const fFord = new MotorVehicle("Ford", "T-Ford", 1932, 2);
const myCanoe = new Vehicle("Canoty", "Floaty", 2010);

const batMobile = new Car("Batman Inc", "Batmobile", 2099, 99999);
const batCycle = new MotorCycle("Batman Inc", "Batcycle", 2050, 5000);