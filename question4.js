//reversed Array
function reversed(arr){
    let reversedArray=[];
    for(i=arr.length-1;i>=0;i--){
        reversedArray.push(arr[i]);
    }
    return reversedArray
}
reversed([1,3,4,5,7,8])
 
