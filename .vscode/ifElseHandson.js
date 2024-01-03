console.log(`----------------------- Step 1 -----------------------`);
var isEvenOrOdd = function (num) {
  var returnValue = "";
  if (num % 2 == 0) {
    returnValue = "EVEN";
  } else {
    returnValue = "ODD";
  }
  return returnValue;
};

var result = isEvenOrOdd(45);
console.log(`45 Given number is ${result}`);

var result = isEvenOrOdd(70);
console.log(`70 Given number is ${result}`);

var result = isEvenOrOdd(67);
console.log(`67 Given number is ${result}`);

var result = isEvenOrOdd(98);
console.log(`98 Given number is ${result}`);

console.log(`----------------------- Step 2 -----------------------`);

var eligibilityForVoting = function (age) {
  var returnValue = "";
  if (age >= 18) {
    returnValue = `You are Eligible for voting.`;
  } else {
    returnValue = `You are not Eligible for voting.`;
  }
  return returnValue;
};

var result = eligibilityForVoting(18);
console.log(`Age is 18: ${result}`);

var result = eligibilityForVoting(20);
console.log(`Age is 20: ${result}`);

var result = eligibilityForVoting(17);
console.log(`Age is 17: ${result}`);

var result = eligibilityForVoting(40);
console.log(`Age is 40: ${result}`);

console.log(`----------------------- Step 3 -----------------------`);

var string = `JavaScript-ES6`;
  var len = string.length;

var javaScript = function(){
  if (len>=10) {
    var returnValue = "";
    returnValue = `The word "JavaScript - ES6" string contains more than 10 characters.`
  } else {
    returnValue = `The word "JavaScript - ES6" string not contains more than 10 characters.`
  }
  return returnValue;
}
var result = javaScript(len);
console.log(`${result}`);

console.log(`----------------------- Step 4 -----------------------`);
var checkStart = function(word){
  if (word.startsWith("Java")) {
    console.log(`Given word "${word}" starts with "Java"`);
  } else {
    console.log(`Given word "${word}" does not starts with "Java"`);
  }

}
checkStart(`JavaScript Language`);




