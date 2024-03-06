// Examples

// Problem Statement
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums= [1, 2, 3, 4]
// Output: false
// Explanation: There are no duplicates in the given array.

// Example 2:
// Input: nums= [1, 2, 3, 1]
// Output: true
// Explanation: '1' is repeating.
const nums =    [1, 2, 3, 1];

const duplicates = (arr) => {
   let obj={}
   for (let i = 0; i < arr.length; i++) {
     if(!obj[arr[i]]){
        obj[arr[i]]=1;
        
    }
     else{
       return true;
     }
    }
    return false;
}
console.log(duplicates(nums));