// Branch Name: B2_W4_D5
      
/* Question 19: Write a for loop to find the sum of digits of a given number.
*/

const num = 12345;
let sum=0;
let str=num.toString()
for (let i=0;i<str.length; i++) {
   sum+=parseInt(str[i]);
}
console.log(sum)

