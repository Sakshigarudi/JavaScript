const developer = {
    firstName : "Sakshi",
    age : 22,
    isMarried : false
}
console.log(developer);
developer.age = 34;
console.log(developer);

//Not Allowed 
/*developer = {

}*/

console.log(`======= Object Freezing =======`);
Object.freeze(developer);
developer.isMarried = false;
developer.firstName = "Sakshi";
console.log(developer);

console.log(`======= const array ============`);
const array = [2, 3,4, 5];
console.log(array);
array[0] = 100;
console.log(array);
// array = [ 99, 77, 88 ]; // Not allowed

console.log(`=== Freezing an array ======`);
Object.freeze(array);
array[1] = 777;
console.log(array);