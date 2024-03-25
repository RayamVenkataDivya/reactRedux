import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo } from './todolistSlice';
function Todolist(){
    var {todos} = useSelector((state)=>{return state.t})
    var [newTodo,setNewTodo]=React.useState()
    var dispatch=useDispatch()
    return (
        <div class="mybox">
            <input type="text" onKeyUp={(e)=>{setNewTodo(e.target.value)}}/>
            <button onClick={()=>{dispatch(addTodo(newTodo))}}>Add Task</button>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <li>{todo}
                            <button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>

    )
}
export default Todolist;