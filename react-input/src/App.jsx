 import { useState } from 'react';
 import TextComponent from './component/TextComponent'
 import InputComponent from './component/InputComponent'
import './App.css';
 

function App() {
  const [ inputText , setInputText] =useState()
  return (
    <div className="App">
      <InputComponent setInputText={setInputText}/>
      <TextComponent inputText={inputText}/>
    </div>
  );
}
 

export default App;
