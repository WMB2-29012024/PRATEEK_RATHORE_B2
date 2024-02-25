// Branch Name: B2_W4_D3

//  Question 3: Write a for-loop to reverse a string.

let strArr = "asdasdzxczxc";
 
// let reverseStr="";
// for(let i=strArr.length-1;i>=0;i--){
//   reverseStr+=strArr[i];
// }
// console.log(reverseStr);/
let reverse_str=(str)=>{
    let empty_str=" ";
    for(let i=str.length-1;i>=0;i--){
      empty_str+=str[i];
    }
    console.log(empty_str);
}
reverse_str(strArr);