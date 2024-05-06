const InputText=(prop)=>{
    const {ID,LabelText,PlaceHolder,Type}=prop;
 return(
   <div>
    <label htmlFor={LabelText}>{LabelText}</label>
    <input type={Type}  placeholder={PlaceHolder} id={ID} />
   </div>
 ) 
}
export default InputText;