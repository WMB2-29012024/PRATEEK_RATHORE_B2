import { useState } from 'react';
 

function  Button({list,setList}) {
    const randomNumber= Math.round(Math.random()*100)
    const handleClick=()=>{
      list.push({ID:randomNumber })
      setList([...list])
    }
  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Button;
