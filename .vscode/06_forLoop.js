// 0 to 10 Number print

for (var index = 0; index <= 10; index++) {
  console.log(index);
}
console.log(`-------------------- Step 1 -------------------- `);
// 0, 2, 4, 6, 8, 10 Number print
for (var index = 2; index <= 10; index = index + 2) {
  console.log(index);
}

console.log(`==================== Number from 10 to 1 ====================`);

for (let index = 10; index >= 1; index--) {
  console.log(index);
}

console.log(`==================== Number from 50 to 40 ====================`);

for (var index = 50; index >= 40; index--) {
  console.log(index);
}

console.log(`==================== WAP to print the table of 5 ====================`);

for (var index = 5; index <= 50; index = index + 5) {
  console.log(index);
}
/*
console.log(`==================== Example of infinite loop  ====================`);
for (let index = 5; index < 10; index--) {
  console.log(index); //5 4 3 2 1 0 .......
  
} */

console.log(`==================== Example of infinite loop  ====================`);
for (let index = 5; index < 10; index ++) {
  console.log(index); //5 4 3 2 1 0 .......
  
}

console.log(`================= Example of No. print in Horizontal line =================`);

// 0, 2, 4, 6, 8, 10 Number print in a horizontal line

var result = "";

for (var index = 0; index <= 10; index = index + 2) {
  result += index + " ";
}

console.log(result.trim());

console.log(`================= Factorial of a Number =================`);
