// Branch Name: B2_W4_D5
      
/* Question 14: Write a for loop to log elements that start with the letter "a".
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

for (let i = 0; i <  strArr.length; i++) {
   
    if (strArr[i][0].toLowerCase() === "a") {
        // Log the element
        console.log(strArr[i]);
}
}