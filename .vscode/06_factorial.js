
let factorial = function(num){
    if (num ==0 || num ==1) {
        return 1;
    }
    if (num<0) {
        return `Invalid input that is negative number: ${num}`;
    }
    let result = 1;
    for (let index = 1; index < num; index++) {
        result = result*index;   
    }
    return result;

}
let result = factorial(15);
console.log(result);
