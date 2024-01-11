let array = [11, 22, 33, 44, 55, 66, 77];
console.log(`Traversing an array...!!!`);
for (const index in array) {
  console.log(array[index]);
}

console.log(`Addition of an array...!!!`);
let sum = 0;
for (const index in array) {
  console.log(array[index]);
  sum = sum + array[index];
}
console.log(`Sum of array element is : ${sum}`);

console.log(`Traversing an array using for of loop ...`);
for (var element of array) {
  console.log(element);
}

let arrayNum = [4, 5, 6, 7, 3];
console.log(`Traversing an array using for of loop ...`);
sum = 0;
for (var element of array) {
  console.log(element);
  sum = sum + element;
}
console.log(`addition is ${sum}`);


console.log(`====== WAP to count the vowels from the given string ======`);
const str = "UI Developer and Backend";
const vowels = "aeiou";
let count = 0;
for (const char of str) {
  console.log(char);
  if (vowels.includes(char.toLowerCase())) {
    count++;
  }
}
console.log(`Vowels count is : ${count}`);

let arrayOfFriends = ["Sakshi", "Omkar", "Anushka"];
const result = arrayOfFriends.join(" , ");
console.log(typeof result);
console.log(result);

arrayOfFriends.reverse();
console.log(arrayOfFriends);

const word = "UI Developer and Backend";
const arrayOfWords = word.split(" ");
console.log(arrayOfWords.length);

/*
const words = word.split("");
console.log(words);
words.reverse();
console.log(words);
const resultString = words.join("");
console.log(resultString);
*/

// In shortcut...
const reverseStr = word.split("").reverse().join("");
console.log(reverseStr);

