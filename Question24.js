// Branch Name: B2_W4_D5
      
/* Question 24: Write a for loop to remove duplicate elements from an array.
*/
const arr = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7];
const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    // Check if the element is not already in the uniqueArr
    if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
    }
}

console.log("Array with duplicates removed:", uniqueArr);


