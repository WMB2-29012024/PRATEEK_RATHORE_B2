// Branch Name: B2_W4_D5
      
/* Question 13: Write a for loop to concatenate all elements into a single string.
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

let concatenate="";
for (let i = 0; i < strArr.length; i++) {
  concatenate+=strArr[i];
}
console.log( concatenate)