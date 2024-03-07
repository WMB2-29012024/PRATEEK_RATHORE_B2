// // Examples

// // Example 1:
// // Input: [2, 5, 1, 6]
// // Expected Output: [12, 5, 1, 8]
// // Explanation:
// // For i=0: |(0) - (5+1+6)| = |0 - 12| = 12
// // For i=1: |(2) - (1+6)| = |2 - 7| = 5
// // For i=2: |(2+5) - (6)| = |7 - 6| = 1
// // For i=3: |(2+5+1) - (0)| = |8 - 0| = 8

// // Example 2:
// // Input: [3, 3, 3]
// // Expected Output: [6, 0, 6]
// // Explanation:
// // For i=0: |(0) - (3+3)| = 6
// // For i=1: |(3) - (3)| = 0
// // For i=2: |(3+3) - (0)| = 6
// let nums= [2, 5, 1, 6];

// let sumof_left_right = (arr)=>{
//     let newarr=[];
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//      for (let j = 0; j < arr.length; j++) {
//           sum+=arr[j-1] + arr[j+1];
//           console.log(sum);
//         newarr.push(sum);
//      }
        
//     }
//     return newarr;
// }
// console.log(sumof_left_right(nums));
// let arr= [2, 5, 1, 6];
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//  for (let j = 1; j < arr.length; j++) {
//       sum+=arr[j-1] - arr[j+1];
//       console.log(sum);
//  }}


let nums=[1,2,3,4,5,6,7,8,9,10]
     let sumofeven =nums.reduce((first , next) => { 
     if(next%2 ===0){ 
          return first + next
     } else{ return first
     }  
},0);
console.log(sumofeven);
 