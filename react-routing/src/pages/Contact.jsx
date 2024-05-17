import { useLocation } from "react-router-dom";

const   Contact = ()=>{
    const location=useLocation();

    return (
        <div>This is Contact Page.. {location.state}</div>
    )
}
export default  Contact;