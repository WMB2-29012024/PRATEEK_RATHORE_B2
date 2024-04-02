const name_input=document.getElementById("Name")
const email_input=document.getElementById("Email")
const form=document.getElementById("form_user")

 form.addEventListener("submit" ,(e)=> {
 
e.preventDefault();
 
   console.log(` Full Name: ${name_input.value}`)
   console.log(`Email: ${email_input.value}`)

})