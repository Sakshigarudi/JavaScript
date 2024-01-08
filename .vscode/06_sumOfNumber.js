let sum = 0;   //1, 
for (let index = 1; index <= 10; index++) {
  sum = index + sum;  
    
}

// WAP to find the multiplication of number from 1 to 5
console.log(`Sum of numbers from 1 to 10 is: ${sum}`);

let mul = 1;   //1, 
for (let index = 1; index <= 5; index++) {
  mul = index * mul;  
    
}
console.log(`Multiplication of numbers from 1 to 5 is: ${mul}`);

// want reverse this word 
let str = `Developer`;
for (let index = 0; index < str.length; index++) {
    let ch = str.charAt(index);
    console.log(ch);
    
}

let word = `Developer`;
let result = " ";
for (let index = word.length-1; index >= 0; index--) {
    result = result + word.charAt(index);
    //result = result.concat(word.charAt(index));
    
}
console.log(`Reverse string is: ${result}`);


let s1 = `Developer UI`;
let vowelsCount = 0;
for (let index = 0; index < s1.length; index++) {
  let char = s1.charAt(index).toLowerCase();
  if (char == `a` || char == `e` || char == `i` || char == `o` || char == `u`) {
    vowelsCount = vowelsCount + 1;
  }

}
console.log(`Vowels count is : ${vowelsCount}`);
