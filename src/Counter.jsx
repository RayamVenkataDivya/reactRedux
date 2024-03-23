import React from 'react';
import {connect}from 'react-redux';
import { incrementCount } from './store/actions';
import { decrementCount } from './store/actions';
import { resetCount } from './store/actions';

function Counter(props){
    console.log(props)
    return (
        <div style={{border:"2px solid black",padding:"10px",margin:"20px"}}>
            <h2>Counter:{props.count}</h2>
            <button onClick={()=>{props.increm()}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.decrem()}}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.rese()}}>Reset</button>&nbsp;&nbsp;
        </div>

    )
}
function mapStateToProps(state){return state.c}
function mapDispatchToProps(dispatch){
    return {
        increm:()=>{dispatch(incrementCount())},
        decrem:()=>{dispatch(decrementCount())},
        rese:()=>{dispatch(resetCount())}
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
(Counter);