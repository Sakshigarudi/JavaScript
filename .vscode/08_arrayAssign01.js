console.log(`==================== Step 1 ====================`);
const fruitsSeasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const elementAtIndex0 = fruitsSeasonal[0];
const elementAtIndex4 = fruitsSeasonal[4];
console.log(`First element is "${elementAtIndex0}" and Last element is "${elementAtIndex4}".`);

console.log(`==================== Step 2 ====================`);
fruitsSeasonal.unshift("Papaya");
console.log(fruitsSeasonal);

console.log(`==================== Step 3 ====================`);
const fruitsSeason = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const removedElements = fruitsSeason.splice(3, 1);
console.log(fruitsSeason);

console.log(`==================== Step 4 ====================`);
const fruitsLists = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
fruitsLists.push("Pineapple");
console.log(fruitsLists);

console.log(`==================== Step 5 ====================`);
const fruitsList = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
fruitsList.splice(4, 0, "Dragon Fruit");
console.log(fruitsList);

console.log(`==================== Step 6 ====================`);
const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
fruits.splice(1, 1, "Kiwi");
console.log(fruits);

console.log(`==================== Step 7 ====================`);

const fevFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const middleElement = fevFruits.slice(1, 4);
console.log(middleElement);

console.log(`==================== Step 8 ====================`);
const array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const last3Element = array.slice(array.length-3);
console.log(last3Element);