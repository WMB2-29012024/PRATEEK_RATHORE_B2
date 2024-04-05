const form_user=document.getElementById("form1")
const inputTag1=document.getElementById("input_bar1")
const inputTag2=document.getElementById("input_bar2")
const paraTag=document.getElementById("para_tag");


 form_user.addEventListener("submit",(e) =>{
    e.preventDefault()
let value_input1 =  parseInt(inputTag1.value);
let value_input2 = parseInt(inputTag2.value); ;
  let sum=value_input1 + value_input2;
  paraTag.innerText=sum
})