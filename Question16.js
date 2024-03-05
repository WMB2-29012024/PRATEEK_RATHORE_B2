// Branch Name: B2_W4_D5
      
/* Question 16: Write a for loop to find the index of a specific element in the array.
*/

const arr = ["apple", "banana", "orange", "grape"];
const target = "orange";
 

let index=-1;
for(let i=0;i<arr.length;i++){
    if(target === arr[i]){
        index=i;
        console.log(index) ;
        break;
    }
}
