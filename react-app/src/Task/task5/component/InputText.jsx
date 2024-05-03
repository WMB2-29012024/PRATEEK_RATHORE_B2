const InputText=()=>{
  const handlechange=(e)=>{
    console.log(e.target.value)
    
  }
   return(
    <div>
    <input id="name" type="text" onChange={handlechange} name="name" />
    
    </div>
   )
}
export default InputText;