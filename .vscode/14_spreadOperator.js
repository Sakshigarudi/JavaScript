let array = ["Jenny", "Elon", "Bill", "Stew"];
console.log(array);
console.log(...array);

console.log(`Rest Parameter`);
function show(n1, n2, ...arg){   // arg is a rest parameter. Rest Parameter should be the last argument in a function  
    console.log(n1);
    console.log(n2);
    console.log(arg);
}
show(10, 20, 30, 40, 50);