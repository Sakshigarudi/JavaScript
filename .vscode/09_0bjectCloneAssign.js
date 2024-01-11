console.log(`<-------------------------- Step 1 -------------------------->`);
const bankSbi = {
  bankName: "State Bank Of India",
  accountNo: 425346332426,
  ifscCode: "SBIN001243",
  branch: "Jintur",
};
console.log(bankSbi);

console.log(`<-------------------------- Step 2 -------------------------->`);
const bankLocation ={
    street :"Chatrapti Shivaji Maharaj Chowk, Jintur",
    city : "Jintur",
    pin : 431509,
}
console.log(bankLocation);

console.log(`<-------------------------- Step 3 -------------------------->`);

const cloneObj = Object.assign(bankSbi,bankLocation );
const clonedBankSbi = Object.assign({}, bankSbi);
const clonedBankLocation = Object.assign({}, bankLocation);
console.log(`Clone Object bankSbi ==>`);
console.log(clonedBankSbi);
console.log(`Clone Object bankLocation ==>`);
console.log(clonedBankLocation);
//console.log(cloneObj);

console.log(`<-------------------------- Step 4 -------------------------->`);
const rateOfInterest = {
    homeLoneInterest : "8.5% p.a.",
    personalLoneInteresrt : "11% p.a.",
    duelInterest : "10% p.a.",
}
console.log(rateOfInterest);

console.log(`<-------------------------- Step 5 -------------------------->`);
const sbiDetails = Object.assign(bankSbi, bankLocation, rateOfInterest);
console.log(`After Merging of Step 1, Step 2 And Step 4 The Result is Given Below :`);
console.table(sbiDetails);

console.log(`<-------------------------- Step 6 -------------------------->`);
console.log(`After traversing of merge object is :`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key} ==> ${element}`);
    }
}

