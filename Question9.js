// Branch Name: B2_W4_D3

//  Question 9: Write a for-loop, and log the current and its immediate previous element.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

let current_previous=(arr)=>{
    let empty_arr=[];
    for(i=0;i<arr.length;i++){
        if(i>0){
            empty_arr.push([ "current",arr[i] ,"current_previous:",arr[i-1]]);
           
        }else
        empty_arr.push(["current",arr[i],"current_previous :not there"])
        
    }
    console.log(empty_arr);
}
current_previous(numArr);