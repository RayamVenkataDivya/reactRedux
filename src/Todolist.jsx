import React from 'react';
import {connect} from 'react-redux';

function Todolist(props){
    var [newTodo,setNewTodo]=React.useState()
    console.log(props)
    return(
        <div style={{border:"2px solid black",padding:"10px",margin:"20px"}}>
            <input type="text" onKeyUp={(e)=>{setNewTodo(e.target.value)}}/>&nbsp;&nbsp;
            <button onClick={()=>{props.addTask(newTodo)}}>AddNewTask</button>
            {
                props.todos.map((todo,i)=>{
                    return <li>{todo}&nbsp;&nbsp;<button onClick={()=>{props.delTask(i)}}>Delete</button></li>
                })
            }

        </div>

    )
}
function mapStateToProps(state){return state.t}

function mapDispatchToProps(dispatch){
    return{
        addTask:(nT)=>{dispatch({type:"ADD TODO",payload:nT})},
        delTask:(i)=>{dispatch({type:"DELETE TODO",payload:i})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist);