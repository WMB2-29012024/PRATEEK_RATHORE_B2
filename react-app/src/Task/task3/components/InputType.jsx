import React from 'react';  

const InputType = (props) => {
 
    const {InputType,LabelText,Placeholder,Id}=props;
return(

  <div>
    <label htmlFor={Id}>{LabelText}</label>

        <input type={InputType}
         placeholder={Placeholder}
          id={Id} />
  </div>
)
}

export default InputType;