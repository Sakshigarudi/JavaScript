const array = [2, 3, 4, [50, 4]];     // depth = 1
console.log(array);;
const newArray = array.flat();
console.log(newArray);

const aa = [2, 3, 4, [4, 5, [9, 4]]];  // depth = 2
const bb = aa.flat();

console.log(`====== With custon logic that is depth = 2 ======`);
const cc = aa.flat(2);
console.log(cc);

// Assignmment  ==> flatMap() ==> learn yourself