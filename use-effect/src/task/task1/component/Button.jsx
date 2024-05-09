import { useEffect } from "react";

const Button=()=>{
    useEffect(()=>{
         (async()=>{
        const response=  await fetch("https://jsonplaceholder.typicode.com/todos")
        const data= await response.json()
        console.log(data)
        }) ()
         

        // fetch("https://jsonplaceholder.typicode.com/todos")
        // .then((response)=> response.json())
        // .then((data)=> console.log(data))

    },[])
    
    return(
        <div>
          
        </div>
    )
}
export default Button;