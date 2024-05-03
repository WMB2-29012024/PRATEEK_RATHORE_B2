const Buttonsclick=()=>{
    const handleclick=()=>{
        alert("Button clicked")
    }
    const handleclick1=()=>{
        alert("right button clicked")
    }
   return(
    <div>
    <button onClick={handleclick}  onContextMenu={handleclick1}>submit</button>
   </div>
   )
}
export default Buttonsclick