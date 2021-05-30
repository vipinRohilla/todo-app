import React from 'react'
import TodoItem from './TodoItem'
function Todos(props) {
    return (
        <div className="container">
            <h3 className="my-3">Todos List</h3>
            {/* {props.todos} */}
            {
                props.todos.length ===0 ? "No todos to Display" : props.todos.map((todo)=>{
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                    
                })}
            
            
        </div>
    )
}

export default Todos
