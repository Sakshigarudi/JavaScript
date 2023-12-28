console.log("======================= Step 1 ======================= ");

console.log();
function para() {
  console.log("Function with no Argument and no Return Value...");
  console.log("------------------------------------------")
  console.log("Function with Argument and no return value... ");
}
para();

console.log("======================= Step 2 ======================= ");

function personalDetails(firstName, lastName, collegeName) {
  //console.log("my first name is ", firstName);
  //console.log("my last name is ", lastName);
  //console.log("my college name is ", collegeName);
}
var firstName = "Sakshi";
var lastName = "Garudi";
var collegeName = "JSPM's RSCOE, Pune";
personalDetails(firstName, lastName, collegeName);

console.log(
  "First Name =",
  firstName,
  ",",
  "Last Name = ",
  lastName,
  ",",
  "collegeName = ",
  collegeName
);

console.log("======================= Step 3 ======================= ");

function swapValues(n1, n2) {
  console.log("Before Swap => ", "n1=", n1, ",", "n2=", n2);
  var temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("After Swap  => ", "n1=", n1, ",", "n2=", n2);
}

swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("======================= Step 4 =======================");

function addThreeValues(n1, n2, n3){
var result = n1+n2+n3;
    console.log("sum is =", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello ", "Good ", "Morning");
