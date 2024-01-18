

let person = {
    firstName : "Sakshi",
    age: 22,
isMarried : false,
city : "Pune",
country : "Bharat",
}

//let firstName = person.firstName;
//let age = person.age;
//let city = person.city;
//let country = person.country;

         //OR 

let {firstName, age, country, city= "Mumbai", pin = 12345 } = person;    // Object Destructing with undefined value

console.log(firstName, age, city, country, pin);

console.log(`========== Array Destructuring ============`);
let array = ["Jenny", "Elon", "Bill"];
// const element0 = array[0];
// const element1 = array[1];
// const element2 = array[2];
let [actress, teslaOwner, microsoftOwner, appleCEO="Tim Cook"] = array;
console.log(actress,teslaOwner, microsoftOwner, appleCEO);
