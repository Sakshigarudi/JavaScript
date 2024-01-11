let person = {
    Name: "Sakshi",
    age: 21,
    isMarried: false,

}
console.log(person);
console.log(`Dot Notation`);
console.log(person.firstName);  // Dot Notation
console.log(`Sqr. Bracket Notation:- `);
console.log(person["firstName"]); // Sqr. Bracket Notation

person.designation = "B.Tech";
console.log(person);

//Update Opeartion: 
person.age = 33;
console.log(person);

//Update Opeartion:
person.isMarried = false;
console.table(person);

//Delete the Property:
delete person.designation;
console.table(person);

//Empty Object: 
console.log(`Empty Object.....`);
let address = {
    
}
// if i want add city in empty obj.:- 
address.city = "pune";
console.table(address);

//Function Expression 
let user = {
    userName : "Sakshi",
    country : "India",
    
    //how to create object in object
   address:  {
        city : "Pune",
        street : "Hinjewadi",
        pin : 411057,
        getAddress: function(){
            console.log(`Complete Address : ${this.street}, ${this.city}, ${this.pin}`); //this is reference variable which hold the current object
        }
    },
   show: function () {
        console.log(`Inside show function`);
    }
}
console.table(user);
let country = user.country;
console.log(country);

//I want inside show function in output:-
user.show();

console.log(user.address.pin);

user.address.flatNo = 302;
console.log(user.address.flatNo);

console.log(user.address);

user.address.getAddress();

console.log(`====== Traversing an object ========`);
let developer = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true,
    skills: ["C", "Python", "AIML", "JavaScript", "C++" ]
}
for (const key in developer) {
    if (Object.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}

console.log(developer.skills);

//add element at last :
developer.skills.push("HTML");
console.log(developer.skills);


//Remove first element :
developer.skills.shift();
console.log(developer.skills);
 
// Nested array means array in array :- 
const keys = Object.keys(developer);
console.log(keys);

const values = Object.values(developer);
console.log(values);
console.log(`Is 'values' array ==>  ${Array.isArray(values)}`);
for (const element of values) {
    console.log(element);  
}

console.log(`Object entries....`);
const entries= Object.entries(developer);
for (const element of entries) {
    console.log(element);
}
console.log(`Accessing nested array element using double [] [] brackets`);
console.log(entries[0][0]);
console.log(entries[0][1]);

console.log(`====== In Operator ======`);
const isAgeAvailable = "Age" in developer;
console.log(`Is Age Available :${isAgeAvailable} `);
const isCityAvailable = "City" in developer;
console.log(`Is City Available :${isCityAvailable} `);

