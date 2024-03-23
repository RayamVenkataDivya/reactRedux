import React from 'react';
import {connect} from "react-redux";
function Todolist(props){
    console.log(props)
    var [newTodo,setNewTodo]=React.useState()
    return (
        <div style={{border:"2px solid black",padding:"10px",margin:"15px"}}>
            <input type="text"  onKeyUp={(e)=>{setNewTodo(e.target.value)}}/>&nbsp;&nbsp;
            <button onClick={()=>{props.addTask(newTodo)}}>AddTodo</button>

            {
                props.todos.map((todo,i)=>{
                    return <li>{todo}&nbsp;
                    <button onClick={()=>{props.delTodo(i)}}>Delete</button>
                    </li>
                })
            }

        </div>

    )
}
export default connect(
    function(state){return state.t},
    function(dispatch){
        return {
            addTask:(nT)=>{dispatch({type:"ADDTODO",payload:nT})},
            delTodo:(i)=>{dispatch({type:"DELETETODO",payload:i})}
        }
    }
    )
    (Todolist);