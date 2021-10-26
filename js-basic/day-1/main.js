let text = 'hello';
let myName = 'Linus';


let test1 = 'First';
let test2 = 'Jooohan';

let idList = [11, 100, 20, 215, 212]
console.log(idList.filter((number, index) => number <= idList[index < idList.length ? index + 1 : 0]))

console.log('Position of h: ', test2.includes('J'));

function concat(var1, var2) {
    return var1 + ' ' + var2;
}
console.log(concat(text.toUpperCase(), myName))