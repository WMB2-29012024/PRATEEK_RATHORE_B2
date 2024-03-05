// Branch Name: B2_W4_D5
      
/* Question 5: Write a for loop to find and log the index of largest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

let largest_elem2=(arr)=>{
    let largest=arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>largest)
        largest=i;
    }
    console.log(largest)
}
largest_elem2(numArr);