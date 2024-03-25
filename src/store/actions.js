export function incrementCount(){
    return {type:"INC"}
}
export function decrementCount(){
    return {type:"DEC"}
}
export function resetCount(){
    return {type:"RESET"}
}
export function addNewTodo(nt){
    return{type:"ADDTODO",payload:nt}
}
export function delTodo(i){
    return {type:"DELETETODO",payload:i}
}