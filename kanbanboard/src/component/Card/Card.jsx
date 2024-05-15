import "./Card.css"
const Card =()=>{
    return(
        <div className="card">
           <form onSubmit={handlesubmit}>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <button type="submit">submit</button>
           </form>
        </div>
    )
}
export default Card