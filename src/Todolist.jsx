import React from "react";
import { connect } from "react-redux";
import { addNewTodo } from "./store/actions";
import { delTodo } from "./store/actions";

function Todolist(props){
    console.log(props)
    var[newTodo,setNewTodo]=React.useState()
    return (
        <div style={{border:"2px solid",padding:"15px",margin:"10px"}}>
            <input type="text"  onKeyUp={(e)=>{setNewTodo(e.target.value)}}/>
            <button onClick={()=>{props.addTask(newTodo)}}>Add Todo</button>
            {
                props.todos.map((todo,i)=>{
                    return <li>{todo}
                    <button onClick={()=>{props.deleteTask(i)}}>Delete</button>
                    </li>
                })
            }
        </div>
    )
}
function mapStateToProps(state){return state.t}
function mapDispatchToProps(dispatch){
    return {
        addTask:(nT)=>{dispatch(addNewTodo(nT))},
        deleteTask:(i)=>{dispatch(delTodo(i))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)