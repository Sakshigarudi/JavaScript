var MarriageEligibility = function (age, gender) {
  var returnValue = " ";
  if ((gender == "Female" && "age" >= 18) || (gender == "Male" && age >= 18)) {
    returnValue = `Age - ${age}, Gender - ${gender}  => You are eligible for marriage.`;
  } else {
    returnValue = `Age - ${age}, Gender - ${gender}  => You are not eligible for marriage.`;
  }
  return returnValue;
};
var result = MarriageEligibility(17, "Male");
console.log(`${result}`);
var result = MarriageEligibility(25, "Male");
console.log(`${result}`);
var result = MarriageEligibility(28, "Female");
console.log(`${result}`);
var result = MarriageEligibility(16, "Female");
console.log(`${result}`);
var result = MarriageEligibility(35, "Other");
console.log(`${result}`);
var result = MarriageEligibility(41, "Other");
console.log(`${result}`);
