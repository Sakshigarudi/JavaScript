const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`<========================= Step 1 =========================>`);
arrayNumbers.forEach((element, index) => {
  console.log(`Element is => ${element} and It's Index is => ${index}`);
});

console.log(`<========================= Step 2 =========================>`);
let num = " ";
arrayNumbers.forEach((element) => {
  if (element > 0) {
    num = num + "  " + element;
  }
});
console.log(`The positive number from given array are =>${num}`);

console.log(`<========================= Step 3 =========================>`);

const arrayNumber = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    arrayNumber.push(element);
  }
});
  console.log(arrayNumber);

  console.log(`<========================= Step 4 =========================>`);
  let sum = ` `;
  arrayNumbers.forEach((element)=>{
if (element%2==0) {
    sum = sum + "  " + element;
}
  });
  console.log(`The EVEN numbers are => ${sum}` );

  console.log(`<========================= Step 5 =========================>`);
  let add = 0;
  arrayNumbers.forEach((element)=>{
    add = add + element;
  });
  console.log(`The sum of all element is => ${add}`);

  console.log(`<========================= Step 5 =========================>`);

  let res = ' ';
  arrayNumbers.forEach((element, index)=>{
   
    if (index%2==0) {
       res = res + " "+ index; 
    }
  });
  console.log(`The numbers who's index value is EVEN are => ${res}`);


