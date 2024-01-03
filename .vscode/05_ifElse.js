var age = 22;
if (age >=21) {
    console.log(`Eligible for Marriage`);
    console.log(`Inside if block`);
} 
else {
    console.log(`Nope...Please try next time...`);
}

var result = age>-21 ? `Eligible for Marriage`: `Nope...Please try next time...`;
console.log(result);

var isEvenOrOdd = function (num) {
    var returnValue = "";
    if (num % 2 == 0) {
      returnValue = "EVEN";
    } else {
      returnValue = "ODD";
    }
    return returnValue;
  };
  
  var result = isEvenOrOdd(23);
  console.log(`23 Given number is ${result}`);
  
  var result = isEvenOrOdd(30);
  console.log(`30 Given number is ${result}`);

  