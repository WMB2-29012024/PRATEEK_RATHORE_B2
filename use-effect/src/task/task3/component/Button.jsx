import { useEffect, useState } from "react"

const Button = () => {
    const [todoData, setTodoData] = useState([])

    const handleclick = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        setTodoData(data)
    }
    return (
        <div>
            <button onClick={handleclick}>Click to Get Data</button>
            <h1>TodoList</h1>
            <ol>{
                todoData.map((todo, index) => {
                    return <li key={index} >{todo.title}</li>
                })
            }
            </ol>
        </div>
    )
}
export default Button