import React from 'react';
import {connect} from "react-redux"
function Counter(props){
    console.log(props)
    return (
        <div style={{border:"2px solid black",padding:"10px",margin:"15px"}}>
            <h1>Count:{props.count}</h1>
            <button onClick={()=>{props.incre()}}>Increment</button>&nbsp;&nbsp;
            <button onClick={()=>{props.decre()}}>Decrement</button>&nbsp;&nbsp;
            <button onClick={()=>{props.rese()}}>Reset</button>&nbsp;&nbsp;
        </div>
    )
}

export default  connect(
    function(state){return state.c},
    function(dispatch){
        return{
            incre:()=>{dispatch({type:"INC"})},
            decre:()=>{dispatch({type:"DEC"})},
            rese:()=>{dispatch({type:"RESET"})}
        }
    }
    )
    (Counter);