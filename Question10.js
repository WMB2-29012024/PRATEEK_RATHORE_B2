// Branch Name: B2_W4_D3

//  Question 10: Write a for-loop, and log the current, its immediate previous, and its immediate next element,
// Put the elements in a new object, and push that object in an array.
// Return that array at the end of the loop

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
// const newelem =(arr)=>{
//     const Arra=[];
//     for(i=0;i<arr.length;i++){
       
//         if(i===0){
//             Arra.push(["not available",arr[i] ,arr[i+1]])
//         }
//         else if(i===arr.length-1){
//             Arra.push([arr[i-1],arr[i] ,"not available"])
//         }
//         else{
//             Arra.push([arr[i-1],arr[i] ,arr[i+1]])
//         }
    
//     }
//     console.log(Arra);
// }  
// newelem(numArr);
const newelem=(arr)=>{

    const babu=[];

    for (let  i = 0;  i < arr.length;  i++) {

        babu.push({
            previous: i===0 ? "not available":arr[i-1],
            current: arr[i],
            next:i===arr.length-1?"not available":arr[i+1]
        })
        
    }
    console.log(babu)
}

newelem(numArr);
