import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";

function Counter(){
    var {count} = useSelector((state)=>{return state.c
    
    })
    // console.log(x)
    var dispatch=useDispatch()
    return (
        <div class="mybox">
            <h1>Counter:{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>&nbsp;&nbsp;
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>&nbsp;&nbsp;
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}
export default Counter;