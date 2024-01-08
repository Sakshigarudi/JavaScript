
console.log(` ---------------- Question 01 ---------------- `);

let word = `I am very good IT Developer`;
let result = 0;
for (let index = 0; index < word.length; index++) {
  let char = word.charAt(index).toLowerCase();
  if (char == `a` || char == `e` || char == `i` || char == `o` || char == `u`) {
    result = result + 1;
  }
}
console.log(`TOtal number of Vowels Count is : ${result}`);


console.log(` ---------------- Question 02 ---------------- `);
// Function to get the sum of cube of numbers from 1 to 5.

let sum = 1;

for (let index = 1; index <= 5; index++) {
  //console.log(index);
 sum = index*index*index + index*index*index + index*index*index + index*index*index + index*index*index;
 //sum = index * index * index ;
}
console.log(`${sum}`);

arrayNum : [2, 3, 5, 6, 7];
arrayNum.length;

