import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
 import Button from './component/AddButton/Button';import 
 ListColoum from './component/ListColoum/ListColoum';
function App() {
  const [list,setList]=useState([])
  return (
    <div className="App">

      {
        list.map((listElem)=>  <ListColoum
        key = {listElem.ID}
        ID = {listElem.ID}
        />)
      }

      
    <Button list={list} setList={setList}/>
    </div>
  );
}

export default App;
