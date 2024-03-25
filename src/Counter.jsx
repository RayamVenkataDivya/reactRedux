import React from 'react'
import { connect } from 'react-redux'
import { decrementCount, resetCount } from './store/actions'
import { incrementCount } from './store/actions'

function Counter(props){
    console.log(props)
    return (
        <div style={{border:"2px solid",padding:"15px",margin:"10px"}}>
            <h2>Counter:{props.count}</h2>
            <button onClick={()=>{props.increment()}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.decrement()}}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.reset()}}>Reset</button>&nbsp;&nbsp;
        </div>
    )
}

function mapStateToProps(state){return state.c}

function mapDispatchToProps(dispatch){
    return {
        increment:()=>{dispatch(incrementCount())},
        decrement:()=>{dispatch(decrementCount())},
        reset:()=>{dispatch(resetCount())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);