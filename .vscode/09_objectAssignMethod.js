

const developer = {
    firstName : "Sakshi",
    age : 22,
    isMarried : false
}

const newDeveloper = Object.assign({}, developer)
newDeveloper.firstName = " Omkar ";
console.log(newDeveloper);
console.log(developer);

console.log(`========= Object Merge ========`);
const user = {
    name : "Anu",
    designation : "CEO"
}

const address = {
    city : "LA",
    country : "USA",
    pin : 112233
}
const mergeObj = Object.assign(user, address); // or we also written like
Object.assign(address, user); // or
Object.assign( {}, user, address);
console.log(user);
console.log(address);
console.log(mergeObj);