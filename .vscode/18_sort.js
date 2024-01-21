const array = ['Jenny', 'Elon', 'Stew', 'Bill'];
console.log(`==== Before Reverse ====`);
console.log(array);
console.log(`==== After Reverse ====`);
array.reverse();
console.log(array);

const arr = ['Jenny', 'Elon', 'Stew', 'Bill'];

console.log(`==== Before Sorting in Ascending order by Name ====`);
console.log(arr);
console.log(`==== Before Sorting in Ascending order by Name ====`);
arr.sort();  // By default sort in ascending order
console.log(arr);

console.log(`==== Before Sorting in Descending order by Name ====`);
arr.reverse();
console.log(arr);

console.log(`==== Sorting Number Array ====`);
const arrayNum = [20, 1, 50, 9, 79, 8];
console.log(`==== Before Sorting ====`);
console.log(arrayNum);
console.log(`==== After Sorting in ascending order ====`);
arrayNum.sort();   // This will not give us the expected result.
console.log(arrayNum);   // it is sorting 1st element like [1, 20, 50, 79, 8, 9] =>[1, 2, 5, 7, 8, 9]

arrayNum.sort((a, b) => {  // a=2o b=1 , a=50 b=9
    return a>b ? -1: 1;  // [1, 20, 9, 50, 79, 8]
    });
console.log(arrayNum);
console.log(`==== After Sorting in Descending order ====`);
arrayNum.sort((a, b) => {  // a=2o b=1
return a>b ? -1: 1;
});
console.log(arrayNum);


