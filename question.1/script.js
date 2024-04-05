const inputTag=document.getElementById("input_bar")
const paraTag=document.getElementById("para_tag");

inputTag.addEventListener("keyup",(e) =>{
let value_input = e.target.value;
  paraTag.innerText=value_input;
})