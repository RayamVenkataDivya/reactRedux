import React from 'react';
import {connect} from 'react-redux';
function Todolist(props){
    var [newTodo,setNewTodo]=React.useState()
    console.log(props)
    return(
        <div style={{border:"2px solid black",padding:"10px",margin:"20px"}}>
            <input type="text" onKeyUp={(e)=>{setNewTodo(e.target.value)}}/>&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"ADD TODO",payload:newTodo})}}>AddTask</button>
            {
                props.t.todos.map((todo,i)=>{
                    return <li>{todo}&nbsp;&nbsp;<button onClick={()=>{props.dispatch({type:"DELETE TODO",payload:i})}}>Delete</button></li>
                })
            }

        </div>

    )
}
export default connect(function(store){return store})(Todolist);