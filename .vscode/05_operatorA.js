console.log("------------------------------- Step 1 -------------------------------");
function operatorA() {
    word = `JavaScript`; 
    var len = word.length;
    var result = len*len;
    console.log(`The string length of word JavaScript is:${len}`, `and square of length is:${result}`); 
    
    word = `Google Chrome`; 
    var len = word.length;
    var result = len*len;
    console.log(`The string length of word Google Chrome is:${len}`, `and square of length is:${result}`);  

    word = `Developer Smart`;
    var len = word.length;
    var result = len*len;
    console.log(`The string length of word Developer Smart is:${len}`, `and square of length is:${result}`);  
}
operatorA();
console.log("------------------------------- Step 2 -------------------------------");

function stringHandsOn(){
funName = "I am Angular Developer";
var len = funName.length;
var trimedString = funName.trim();
var total = len/trimedString;
console.log(`Length of string is: ${len}`);
console.log(`Total number of words in string is: ${trimedString.split(" ").length}`);
console.log(`Division of string word and length of word : ${total}`);
 


}
stringHandsOn()

