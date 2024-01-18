// Arrow function with no arguments and no retrun values.
const show = () => {
    console.log(`Inside Arrow function with no arguments and no retrun values... `);

}
show();

// Arrow function with arguments and no retrun values.
const add = (num1, num2)=>{
    console.log(`Addition is : ${num1 + num2}`);
}
add(10, 40);

// 3 Arrow function with arguments and return value.
const multiply = (n1, n2) => {
    return n1*n2;
    
}
const returnValue = multiply(5, 5);
console.log(`Multiplication is : ${returnValue}`);

// Write a arrow function with input value " JavaScript" and and the return total number of characters.
const totalCharCount = (JavaScript) => {
    var n1 = JavaScript.length; 
    return n1; 
}
const returnResult = totalCharCount(" Javascript");
console.log(`Total number of characters is: ${returnResult}`);

