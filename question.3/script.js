 const selectOption=document.getElementById("select_opt")
 const paraOption=document.getElementById("para1")

 selectOption.addEventListener("change",(e) =>{
    e.preventDefault()
   let valueofsel= selectOption.value
   paraOption.innerHTML=valueofsel
 })