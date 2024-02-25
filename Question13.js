// Branch Name: B2_W4_D3

//  Question 13: Write a for-loop:
// - Start from 0th index, log every element,
// - then go to next index, log all next elements,
// - continue till last element

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    
// let print_ele=(arr)=>{
//      let empty_arr=[];
//      for(let i=0;i<arr.length;i++){
//          // console.log(arr[i]);
//          for(let j=i;j<arr.length;j++){
//             empty_arr.push(arr[j] + " ")
//         }
//     }

    
//     console.log(empty_arr);
// }
// print_ele(numArr);


         // Another solution
         let print_ele=(arr)=>{
            for (let i = 0; i < arr.length; i++) {
                let output=" ";
                for (let j = i; j < arr.length; j++) {
                output+= arr[j] +" ";
                 
                }
                 
                console.log(output);
            }
        }
print_ele(numArr);
