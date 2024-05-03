import "./card.css"
const Card = (prop) => {
    const {index,key}=prop
    console.log(prop)
    return (
        
        <div className="card-container" >
         <h1>card{index}</h1>
        <p>Lorem ipsum dolor sit.</p>
        </div >

    )

}
export default Card