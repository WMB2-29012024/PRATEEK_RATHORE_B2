// Example 1:
// Input: [[5,2,3],[0,6,7]]
// Expected Output: 13
// Justification: The total wealth of the first customer is 10 and of the second customer is 13. So, the output is 13 as it’s the maximum among all customers.

// Example 2:
// Input: [[1,2],[3,4],[5,6]]
// Expected Output: 11
// Justification: Total wealth for each customer is [3, 7, 11]. Maximum of these is 11.

// Example 3:
// Input: [[10,100],[200,20],[30,300]]
// Expected Output: 330
// Justification: Total wealth for each customer is [110, 220, 330]. The wealthiest customer has 330
let numsarr=[[5,2,3],[0,6,7]];
let numsarr2=[[1,2],[3,4],[5,6]];
let   Richest_Customer =(arr)=>{

    let richest = 0;

    for(let i=0;i<arr.length;i++){
        let elem=arr[i];
        let sum=0;
        for(let j=0;j<elem.length;j++){
         sum+=elem[j];
         if(richest<sum){
            richest=sum;
         }
        }
    }
    return richest;
}
console.log(Richest_Customer(numsarr));
console.log(Richest_Customer(numsarr2));