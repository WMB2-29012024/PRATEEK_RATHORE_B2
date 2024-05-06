const UserInfo=(prop)=>{
    const {name}=prop
    return(
        <div>
           <h3>Hello<span style={{color:"red"}}>{name}</span></h3>
        </div>
    )
}
export default UserInfo