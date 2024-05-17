import { Link, useNavigate } from "react-router-dom";
import "./Home.css"
 import { useEffect } from "react";
const    Home = ()=>{
 const navigate=useNavigate()
    return (
        <div>  
       <div className="navbar">   
        < Link  to="/">Home</Link>  
       < Link  to="/Contact">Go to Contact</Link>  
       < Link  to="/About">Go to About</Link>   
       < Link  to="/Project">Go to  Project</Link>   
       < Link  to="/Course">Go to   Course</Link>   
       
   </div>
   <button onClick={()=>navigate("/Contact",{state:"its me"})}>
    go to contact
   </button>
    </div>
   
    )
}
export default Home;