console.log(`****************** call(), Method **********************`);
let person = {
    firstName : "Sakshi",
    age : 32,
    isMarried : false,
}

function greet(messege, msg){
    console.log(`Hello ${messege} , ${this.firstName}, ${msg}`);
}
//  functionName.call(object arguments Ex, arg1. arg2...argN)
greet.call(person, `Good Morning`, `How are you`);

console.log(`========= apply() ============`);
function show(message, msg) {
    console.log(`Hello ${message}, ${this.firstName}, ${msg}`);
}
//  functionName.apply[object arguments Ex, arg1. arg2...argN]
show.apply(person, ['Good Morning', 'How are you ?'] );

console.log(`========== bind() ===========`);
function display(message, msg) {
    console.log(`Hello ${message}, ${this.firstName}, ${msg}`);
}
const newFunction = display.bind(person);
newFunction('Good Morning', 'How are you ?');

