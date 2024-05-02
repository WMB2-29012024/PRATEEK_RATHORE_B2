import React from "react";

 
const countComponent =({countNumber})=>{
    console.log(countNumber)
    return(
    
        <div>
            <h1>{countNumber}</h1>
        </div>
    )
}
export default  countComponent