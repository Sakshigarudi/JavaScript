console.log(`----------------------- Step 1 -----------------------`);
var maleMarriageEligibility = function (gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName} you are eligible for Marriage`
      : " Unfortunately - You are not eligible, Please try next time.";

  console.log(result);
};

maleMarriageEligibility("Male", 25, "Billgates");

maleMarriageEligibility("Male", `17`, "Stew Jobs");
console.log(`----------------------- Step 2 -----------------------`);

var femalMarriageEligibility = function (gender, age, girlName) {
  var returnValue = " ";
  if ((gender = "female" && age >= 18)) {
    returnValue = `Hey ${girlName} You are eligible for Marriage.`;
  } else {
    returnValue = `Unfortunately - You are not eligible for Marriage.`;
  }
  return returnValue;
};
var result = femalMarriageEligibility("Female", 16, "Jenifer");
console.log(`${result}`);
var result = femalMarriageEligibility("Female", 27, "Malinda Gates");
console.log(`${result}`);
