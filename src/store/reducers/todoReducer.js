const initialState={
    todos:['buy car','pay rent']
}

function todoReducer(state=initialState,action){
    if(action.type==="ADD TODO"){
        return {...state,todos:[...state.todos,action.payload]}
    }
    if(action.type==='DELETE TODO'){
        var temp=[...state.todos]
        temp.splice(action.payload,1)
        return {...state,todos:[...temp]}
    }
    return state
}
export default todoReducer;