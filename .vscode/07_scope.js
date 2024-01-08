const country = "India"; //variable declaration
let age; //variable declaration
console.log(age);
age = 32;
var city;
city = "Pune";
console.log(city);

// country = "Bharat";
console.log(country);

// Re declaration
//const country = "UK";
//let age = 40;

var city = "Mumbai";

//Scope
if (true) {
  var n1 = 100;
  //let n2 = 200;
  const n3 = 300;
}
console.log(n1, "Function Scoped");
//console.log(n2);
//console.log(n3);

function show(params) {
  for (let index = 0; index < 2; index++) {
    var s1 = "s1";
    let s2 = "s2";
    const s3 = "s3";
  }
  console.log(s1);
  //console.log(s2);
 // console.log(s3);
}
show();