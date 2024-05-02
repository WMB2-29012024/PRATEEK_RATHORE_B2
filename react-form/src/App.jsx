 import FormSection from "./components/FormSection"
 import CardSection from "./components/CardSection"

import './App.css';
import { useState } from 'react';

function App() {
  const [Inputform,setInputform]=useState()
  return (
    <div className="App">
     <FormSection setInputform={setInputform}/>
     <CardSection Inputform={Inputform}/>
    </div>
  );
}



export default App;
