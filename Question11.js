// Branch Name: B2_W4_D3

//  Question 11: Write a for-loop and count frequency of each element in the array. Store the element and its frequency in an object.

const numArr = [1, 2, 3, 4,10,1,3, 5, 6, 7, 7,8, 9, 10]    

const newelement=(arr)=>{
 let babu=[];
 let obj={};
 let count=0;
 for (let i = 0; i < arr.length; i++) {

    if(!obj[arr[i]]){
        obj[arr[i]]=1;
    }else{
        obj[arr[i]]=obj[arr[i]]+1;
    }
    
    
    
}
console.log(obj)
}
newelement(numArr);