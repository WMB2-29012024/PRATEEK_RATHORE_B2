// Branch Name: B2_W4_D5
      
/* Question 1: Write a for loop to log each element multiplied by 2.
*/

const numArr = [1, 2, 3, 4, 5];
let multiplied=(arr)=>{
    let multi=[];
    for(let i=0;i<arr.length;i++){
        multi.push([arr[i] * 2]);
    }
    console.log(multi);
}
multiplied(numArr);
