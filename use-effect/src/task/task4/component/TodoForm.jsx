 
 
const TodoForm = ({setTodoData}) => {

const handleTodoFormSubmit  = async(e)=>{
e.preventDefault();

const response= await fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.todoInput.value}`)
const data= await response.json()
console.log(data)
 setTodoData(data)
};


    return (
       
            <form onSubmit={handleTodoFormSubmit}>
                <input type="number"
                 id="todoInput" />
                <button type="submit">Get Data</button>

            </form>

        
    )
}
export default TodoForm;