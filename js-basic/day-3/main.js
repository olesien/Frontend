

function greet(name, hasKeys = false) {
    console.log('Has keys?' + hasKeys)
    alert(`Hello, ${name}, ${!hasKeys ? 'you forgot your keys!' : ''}`);
    console.log('hello world!');
}
let isNice = true;
if (isNice) {
    //greet('Linus', true);
}   
const sayWhatever = function(stuff) {
    console.log(stuff)
}
const myFunction = (name, genericName, callback) => {
    console.log('say hi ' + name + genericName)
    callback('hey this is unique');
}

let genericName = "hey";
myFunction('Linus', genericName, sayWhatever);

let students = ['carl', 'peter', 'ya'];
students.forEach(e => {
    console.log(e)
})