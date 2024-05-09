import { useEffect, useState } from "react";

const Button = () => {
    const [todoData, setTodoData] = useState([])
    console.log("1", todoData)
    useEffect(() => {
        (async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json();

            setTodoData(data)
        })()
    }, []);

    return (
        <div>

            <h1>TodoList</h1>
            <ol>{
                todoData.map((todo) => {
                    return <li >{todo.title}</li>
                })
            }
            </ol>

        </div>
    )
}
export default Button;