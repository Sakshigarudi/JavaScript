const arrayNum = [2, 4, 6, 8];
console.log(arrayNum);
console.log(`total elements in the array is : ${arrayNum.length}`);
console.log(`array type is: ${typeof arrayNum}`);

console.log(`==== Read or access value from array ====`);
const elementAtIndex2 = arrayNum[2];
console.log(`Element at index 2 is: ${elementAtIndex2}`);

console.log(`==== Traversing value from array ==== `);
for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
  console.log(element);
}

console.log(`==== WAP to sum of array  ==== `);
let sum = 0;
for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
  sum = sum + arrayNum[index];
}
console.log(sum);

console.log(`==== Find index of an element ==== `);
const indexOf6 = arrayNum.indexOf(6);
console.log(`Index of 6 is : ${indexOf6}`);
const indexOf303 = arrayNum.indexOf(303);
console.log(`Index of 303 is ${indexOf303}`);

console.log(`==== WAP to write array in reverse order ==== `);
for (let index = arrayNum.length-1; index >= 0; index--) {
    const element = arrayNum[index];
    console.log(element);
    
}

console.log(`==== WAP to find the even positioned value ==== `);
for (let index = 0; index < arrayNum.length; index++) {
   if (index%2==0) {
    let n1 = arrayNum[index];
    console.log(n1);
   }
    
}

let array = ["Sakshi", "Omkar", "Anushka"];
console.log(`====== Adding element at the end ======`);
array.push("Ankita");
console.log(array);

console.log(`====== Adding element at the begining ======`);
array.unshift("Garudi");
console.log(array);

console.log(`====== Removing the very first element ======`);
let arrayNumbers = [11, 22, 33, 44, 55];
arrayNumbers.shift();
console.log(arrayNumbers);

console.log(`====== Removing the very last element ======`);
arrayNumbers.pop();
console.log(arrayNumbers);

console.log(`====== Selecting Multiple numbers ======`);
let arrayNums = [11, 22, 33, 44, 55, 66, 77];
let elements = arrayNums.slice(2);
console.log(elements);

const elementsMiddle = arrayNums.slice(1, 5);
console.log(elementsMiddle);

console.log(`====== Removing or deleting an elements  ======`);
const removedElements = arrayNums.splice(3);
console.log(`Removed Elements :-`);
console.log(removedElements);
console.log(`Original Array :-`);
console.log(arrayNums);

console.log(`====== Removing or deleting an elements using start index and count ======`);
let arrayNo = [11, 22, 33, 44, 55, 66, 77];
const removed = arrayNo.splice(2, 3);
console.log(`Deleted elements :-`);
console.log(removed);
console.log(`Original Array :-`);
console.log(arrayNo);


console.log(`====== Removing or deleting an single middle element ======`);
let arrayNu = [11, 22, 33, 44, 55, 66, 77];
const oneRemoved = arrayNu.splice(3, 1);
console.log(`Deleted elements :-`);
console.log(oneRemoved);
console.log(`Original Array :-`);
console.log(arrayNu);

console.log(`====== Inserting an elements in the middle without removed any element. ======`);
let arrayN = [11, 22, 33, 44, 55, 66, 77];
arrayN.splice(3, 0, 99);
console.log(arrayN);

console.log(`====== Replacing an elements in the middle ======`);
let arrayNN = [11, 22, 33, 44, 55, 66, 77];
console.log(arrayNN);
arrayNN.splice(2, 2, 100);
console.log(arrayNN);
