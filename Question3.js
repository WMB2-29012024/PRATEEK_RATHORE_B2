// Branch Name: B2_W4_D5
      
/* Question 3: Write a for loop to find and log the largest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

let largest_elem=(arr)=>{
    for(let i=0;i<arr.length;i++){
    }
    console.log(Math.max(...arr))
}
largest_elem(numArr);


let largest_elem2=(arr)=>{
    let largest=arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>largest)
        largest=arr[i];
    }
    console.log(largest)
}
largest_elem2(numArr);