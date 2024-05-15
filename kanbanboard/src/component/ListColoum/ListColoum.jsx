import { useState } from "react"
import "./ListColum.css"
import Card from "../Card/Card"
const ListColoum=()=>{
    const [cardlist,setCardList]=useState([])

       const randomNumber= Math.round(Math.random()*100)

        const creatCard=()=>{
          cardlist.push({ID:randomNumber })
           setCardList([...cardlist])
        }

    return(
        <div className="ListColoum">
            <button onClick={creatCard}>Create</button>
           {
            cardlist.map((cardElem)=><Card/>)
        } 
            
            
        </div>
    )
}
export  default ListColoum;