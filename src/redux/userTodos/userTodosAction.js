import { ADD_TODO, DELETE_TODO, EDIT_TODO, MODIFY_TODO, UPDATE_TODO } from "./userTodosType";

export function addTodo(userId,todo){
    return{
        type:ADD_TODO,
        payload:{
            userId,
            todo
        }
    }
}
export function deleteTodo(userid,task){
    return{
        type:DELETE_TODO,
        payload:{
            userid,
            task
        }
    }
}

export function updateTodo(id,completed){
    return{
        type:UPDATE_TODO,
        payload:{
            id,
            completed
        }
    }
}

export function editTodo(userID,edited){
    return{
        type:EDIT_TODO,
        payload:{
            userID,
            edited
        }
    }
}

export function modifyTodo(uID,modified,value){
    return{
        type:MODIFY_TODO,
        payload:{
            uID,
            modified,
            value
        }
    }
}

