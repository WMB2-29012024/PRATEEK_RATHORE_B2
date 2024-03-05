// Branch Name: B2_W4_D5
      
/* Question 8: Write a for loop to log only odd numbers in the array.
*/

const numArr = [10, 2, 9, 8, 6, 12, 20, 30, 4, 50];

let odd_elem=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
   if(arr[i]%2!==0){
    console.log(arr[i]);
   }
        
    }
}
odd_elem(numArr);