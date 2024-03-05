// Branch Name: B2_W4_D5
      
/* Question 9: Write a for loop to log elements greater than 3.
*/

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let greater_then_3=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]>3)
        console.log(arr[i]);
    }
}
greater_then_3(numArr);