export function incrementCount(){
    return {type:"INC"}
}
export function decrementCount(){
    return {type:"DEC"}
}
export function resetCount(){
    return {type:"RESET"}
}
export function addNewTodo(nT){
    return{type:"ADDTODO",payload:nT}
}
export function delTodo(i){
    return {type:"DELETETODO",payload:i}
}