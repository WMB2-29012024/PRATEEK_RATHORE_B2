// Branch Name: B2_W4_D3

//  Question 8: Write a for-loop, and log the current and its immediate next element.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

let current_previous=(arr)=>{
    let empty_arr=[];
    for(i=0;i<arr.length-1;i++){
        
        empty_arr.push([arr[i] , arr[i+1]]);
    }
    console.log(empty_arr);
}
current_previous(numArr);