console.log(`================ Number from 5 to 15 ================ `);
var num = " ";
for (let index = 5; index <= 15; index++) {
  console.log(index);
  num += index + " ";
}
console.log(`----In Horizontal line ----`);
console.log(num.trim());

console.log(`================ Number from 50 to 40 ================ `);
var num = "";
for (let index = 50; index >= 40; index--) {
  console.log(index);
  num += index + " ";
}
console.log(`----In Horizontal line ----`);
console.log(num.trim());

console.log(`================ Frist 15 odd number ================ `);

var rnum = " ";
var count = 0; // 1 
for (var index = 1; count <=15; index = index +2) { //3
  console.log(index);
  count = count + 1;
  num += index +" "; 
}
console.log(`----In Horizontal line ----`);
console.log(num.trim())

console.log(`================ Frist 10 Even number ================ `);
var num = " ";
var count = 0;
 for (var index = 0; count <= 10; index = index + 2) {
  console.log(index);
  count = count + 1;
  num += index +" ";
 }
 console.log(`----In Horizontal line ----`);
console.log(num.trim());

console.log(`================ Table of 5  ================ `);
var num = " ";
for (var index = 5; index <= 50; index = index+5) {
  console.log(index);
  num += index +" "; 
  
}
console.log(`----In Horizontal line ----`);
console.log(num.trim());

console.log(`================ Table of 10 ================ `);

var num = " ";
for (var index = 10; index <= 100; index= index+10) {
  console.log(index);
  num += index + " ";
  
}
console.log(`----In Horizontal line ----`);
console.log(num.trim());

console.log(`================ Table of 10 in reverse order ================ `);
num = " ";
for (var index = 100; index >= 10; index= index - 10) {
  console.log(index);
  num += index +" ";
}
console.log(`----In Horizontal line ----`);
console.log(num.trim());