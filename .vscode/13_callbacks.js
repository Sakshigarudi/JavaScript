

function jenny(callback){    //arg = 100
console.log(`After session.. jenny started homework`);
console.log(`Jenny completed all steps.`);
console.log(`Then she is ready to call back bill`);
callback();     // callback function
}

let bill = function (){
    console.log(`I am bill and i am going to play cricket`);
    console.log(`I am jenny likes me, hence once she complete her homework`);
    console.log(`She will definitly call me back...`);
    console.log(`Then i will copy all the assignments as it is ...`);

}
jenny(bill)

let greet = function(){
    console.log(`Hey.. Good Morning..`);
}
setTimeout(greet, 5000); // 1 Sec = 1000 Milli seconds

setTimeout( function(){
    for (let index = 0; index < 5; index++) {
        console.log(index);
        
    }
} , 3000);

/*
// let result = setInterval( function(){
//     console.log(`Hello.. `);
// }, 2000);
// clearInterval(result);
*/