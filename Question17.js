// Branch Name: B2_W4_D5
      
/* Question 17: Write a for loop to check if all elements in the array are positive numbers.
*/

const arr = [10, 20, -5, 30, 40];
let allpostive=true;
for(let i=0;i<arr.length;i++){
    if(arr[i]<=0){
        allpostive=false;
        break;
    }
}
    if(allpostive){
        console.log('all aree +ve')
    }
    else{
        console.log('not all are +ve')
}
