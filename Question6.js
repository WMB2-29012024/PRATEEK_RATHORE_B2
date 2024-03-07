// Examples

// Example 1:
// Input:
// [[1,2,3],
// [4,5,6],
// [7,8,9]]
// Expected Output: 25
// Justification: Summing up the two diagonals (1+5+9+3+7), we get 25. Please note that the element at [1][1] = 5 is counted only once.

// Example 2:
// Input:
// [[1,0],
// [0,1]]
// Expected Output: 2
// Justification: The sum of the two diagonals is 1+1 = 2.

// Example 3:
// Input:
// [[5]]
// Expected Output: 5
// Justification: Since there’s only one element, it is the sum itself.
let numarr1 = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]];
let numarr2= [[1,0],
              [0,1]];

let Matrix_Diagonal_Sum = (arr) => {
    let sum1= 0;
    
    for (let i = 0; i < arr.length; i++) {
     
        sum1+= arr[i][i] +arr[i][arr.length-1-i] ;
    }
    if(arr.length%2!==0){
        let middle= Math.floor(arr.length/2);
        sum1-=arr[middle][middle];

    }
       

    return sum1;
 
}
console.log(Matrix_Diagonal_Sum(numarr1))
console.log(Matrix_Diagonal_Sum(numarr2))