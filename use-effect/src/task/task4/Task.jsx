import TodoForm from "./component/TodoForm"
import TodoData from "./component/TodoData";
import { useState } from "react";
const Task=()=>{
    const[todoData,setTodoData]=useState({})
    return(
        <div>
        <TodoForm setTodoData={setTodoData}/>
        <TodoData todoData={todoData}/>
        </div>
    )
}
export default Task;