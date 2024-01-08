
var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName){
var returnValue = " ";
if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
    returnValue = `Congrats ${candidateName}, you are eligible for TCS interview.`
} else {
    returnValue = `Unfortunately ${candidateName}, you are not eligible for interview.`
}
return returnValue;
}
var result = interviewEligibility(80, 86, 90, "Omkar");
console.log(`${result}`);

var result = interviewEligibility(70, 65, 55, "Anushka");
console.log(`${result}`);

var result = interviewEligibility(60, 79, 88, "Pranjul");
console.log(`${result}`);



