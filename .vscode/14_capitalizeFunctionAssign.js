console.log(`<------------ Removed Duplicate element from array ------------>`);
function getUnique(arr){

    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [11, 3, 4, 11, 4, 7, 3];
getUnique(array);

console.log(`<---------- capitalize first and last letter in word ---------->`);

//Define a function that takes a string as an argument
function capital(str) {
  // Split the string into an array of words
  let words = str.split(" ");
  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Get the first and last letter of the word
    let first = words[i][0];
    let last = words[i][words[i].length - 1];
    // Capitalize the first and last letter
    first = first.toUpperCase();
    last = last.toUpperCase();
    // Replace the original word with the modified word
    words[i] = first + words[i].slice(1, -1) + last;
  }
  // Join the array back into a string and return it
  return words.join(" ");
}

let example = "How are you mate";
console.log(`Before: ${example}`);
console.log(`After: ${capital(example)}`);