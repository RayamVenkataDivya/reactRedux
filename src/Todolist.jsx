import React from 'react';
import {connect} from 'react-redux'

function Todolist(props){
    // console.log(props)
    var [newTodo,setNewTodo]=React.useState()
    return (
        <div className='mybox'>
            <h1>Todolist...</h1>
            <input type="text" placeholder='enter new todo' onKeyUp={(e)=>{setNewTodo(e.target.value)}} />&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:'ADD TODO',payload:newTodo})}}>Add Todo</button>
            {
                props.t.todos.map((todo,i)=>{
                    return <li>{todo}&nbsp;&nbsp;
                    <button onClick={()=>{props.dispatch({type:"DELETE TODO",payload:i})}}>Delete</button>
                    </li>
                })
            }
        </div>
    )
}
export default connect(function(store){return store})(Todolist)