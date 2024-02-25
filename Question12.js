// Branch Name: B2_W4_D3

//  Question 12: Write a for-loop to log every element, starting from middle of the array

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11] 

let newArr=[];  
console.log((numArr.length/2))

if(numArr.length%2===0){

    for(let i = (numArr.length/2);i<numArr.length;i++){

        newArr.push(numArr[i]);
    }
}else{
    for (let i = (Math.floor(numArr.length/2)); i < numArr.length; i++) {
        newArr.push(numArr[i]);
        
    }
}
console.log(newArr)

