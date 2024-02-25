// Branch Name: B2_W4_D3

//  Question 6: Write a for-loop to log every 4th element, starting from 0th index.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    
const fourth_elm=(arr)=>{
    let empty_arr=[];
    for(let i=0;i<arr.length;i=i+4){
        empty_arr.push(arr[i]);
    }
    console.log(empty_arr);
}
fourth_elm(numArr);