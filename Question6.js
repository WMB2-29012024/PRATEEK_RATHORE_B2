// Branch Name: B2_W4_D5
      
/* Question 6: Write a for loop to find and log the index of smallest element in the array.
*/
 

const numArr = [10, 2, 30, 4, 50];
let smallest_elm=(arr)=>{
    let smallest=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest= i;
        }
    }
    console.log(smallest)
}
smallest_elm(numArr);