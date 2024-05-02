import React from "react";
// import "./coponents/Buttons.css"

const Buttons=({setCount})=>{

    const handleCountDecrease = () =>{
        setCount(currentValue => currentValue !==0?currentValue-1:0)
    }
    const handleCountInrease = () =>{
        setCount (currentValue => currentValue + 1)
    }

    return(
       <div>
         <button onClick={handleCountDecrease}>Derease</button>
        <button onClick={handleCountInrease}>Increase</button>
       </div>
    )
}
export default Buttons;