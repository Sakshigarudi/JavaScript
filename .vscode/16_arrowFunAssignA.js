console.log(
  `<<------ Arrow function with no argument and no return value ------>>`
);
const show = () => {
  console.log(`"Good Morning, Today is Tursday"`);
};
show();

console.log(
  `<<------ Arrow function with 3 argument and no return value ------>>`
);
const multiply = (n1, n2, n3) => {
  return n1 * n2 * n3;
};
const returnValue = multiply(5, 5, 2);
console.log(`Multiplication of three number is : ${returnValue}`);

const mul = (n1, n2, n3 = 1) => {
  return n1 * n2 * n3;
};
const returnResult = mul(10, 4, 1);
console.log(`Multiplication of three number is : ${returnResult}`);

console.log(
  `<<------ Arrow function with 5 argument and return value ------>>`
);

const add = (n1,n2,n3,n4,n5) => {
    return n1 + n2 + n3 + n4 + n5;
};
const returnValue1 = add(100,100,200,349,756);
console.log(`Addition is: ${returnValue1}`);
const returnValue2 = add("I am"," learning ","ES6 ","feature ","in depth");
console.log(`Addition is: ${returnValue2}`);

