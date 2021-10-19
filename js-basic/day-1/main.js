let text = 'hello';
let myName = 'Linus';


let test1 = 'First';
let test2 = test1;
test1 = 'Second\''
console.log(test1);

function concat(var1, var2) {
    return var1 + ' ' + var2;
}
console.log(concat(text, myName))