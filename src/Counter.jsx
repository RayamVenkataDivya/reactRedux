import React from 'react';
import {connect}from 'react-redux';

function Counter(props){
    // console.log(props)
    return (
        <div style={{border:"2px solid black",padding:"10px",margin:"20px"}}>
            <h2>Counter:{props.c.count}</h2>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"RESET"})}}>Reset</button>&nbsp;&nbsp;
        </div>

    )
}
export default connect(function(store){return store})(Counter);