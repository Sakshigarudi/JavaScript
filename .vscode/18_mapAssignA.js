console.log(`<< ------------------------ Step 1 ------------------------ >>`);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
const addNo = arrayNumbers.map((currentValue, index, array)=>{
return currentValue +10;
});
//console.log(`Given array is :`, arrayNumbers);
console.log(`->> After adding 10 into each array element : `, addNo);
//console.log();

console.log(`<< ------------------------ Step 2 ------------------------ >>`);
const cubeArray = arrayNumbers.map((currentValue, index, array)=>{
return currentValue*currentValue*currentValue;
});
console.log(`->> The cube of each array element : `,cubeArray);

console.log(`<< ------------------------ Step 3 ------------------------ >>`);
const addIndexValue = arrayNumbers.map((value, index) => {
//let res = value + index;
return value + index;

});
console.log(`->> After adding index value into each array element : `, addIndexValue);
//console.log(addIndexValue);
