console.log("=================== Assignment 1 ===================");

function stringBasics(){
    var dreamCompany = "Veritas";
    console.log(`My dream company is =>`, dreamCompany);
}
stringBasics();

function myHobbies(hobby1, hobby2, hobby3){
    var hobby1 = "Singing";
    var hobby2 = "Travelling";
    var hobby3 = "Listening Music";
    console.log(`My Hobbies are => , ${hobby1}, ${hobby2}, ${hobby3}`);
   var result=  hobby1.length + hobby2.length + hobby3.length
   console.log(`Sum of the Total Number of Charecters is =>`, result);
}
myHobbies(`Singing, Travelling, Listening Music`);