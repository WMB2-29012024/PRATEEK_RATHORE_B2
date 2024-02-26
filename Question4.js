// Use push method to add new data in the array, and log the new length of the array, 
// but without using the .length property.
let arr=[3,57,9,2,23,45,6];
let newarr=arr.push(4);
console.log(arr);
console.log(newarr);

const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
