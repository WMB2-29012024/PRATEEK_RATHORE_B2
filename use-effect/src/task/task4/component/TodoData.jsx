const TodoData=({todoData})=>{
    return(
      <div>
        <h2>Todo Data:</h2>
        {
          todoData?(
            <>
            <p>ID:{todoData.id}</p>
            <p>Titile:{todoData.title}</p>
            <p>Status:{String(todoData.completed)}</p>
            </>
          ): <p>No data found</p>
        }
      </div>
    )
}
export default TodoData;