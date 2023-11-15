import { ADD_TODO, DELETE_TODO, EDIT_TODO, MODIFY_TODO, UPDATE_TODO } from "./userTodosType";

const initialState={
    userData:{}
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
        const {userId,todo}=action.payload
        return{
            ...state,
            userData:{
                ...state.userData,
                [userId]:Array.from(new Set([
                    ...(state.userData[userId]||[]),
                    ...todo,
                ]))
            }
        }
        case DELETE_TODO:
            const {userid,task}=action.payload
            if(state.userData[userid] && state.userData[userid].length>0){
                const updatedUserData={
                    ...state.userData,
                    [userid]:state.userData[userid].filter(item=>item!==task)
                }
            return{
                userData:updatedUserData
            }
        }
        return state
        case UPDATE_TODO:
            const{id,completed}=action.payload
            if(state.userData[id] && state.userData[id].length>0){
            const completedTasks={
                ...state.userData,
                [id]:state.userData[id].map(item=>item===completed?{...item,completed:!item.completed}:item)
            }
            return{
                userData:completedTasks
            }
            }
            
        return state
        case EDIT_TODO:
            const{userID,edited}=action.payload
            if(state.userData[userID] && state.userData[userID].length>0){
            const completedTasks={
                ...state.userData,
                [userID]:state.userData[userID].map(item=>item===edited?{...item,isediting:!item.isediting}:item)
            }
            return{
                userData:completedTasks
            }
            }
            
        return state
        case MODIFY_TODO:
            const{uID,modified,value}=action.payload
            if(state.userData[uID] && state.userData[uID].length>0){
            const completedTasks={
                ...state.userData,
                [uID]:state.userData[uID].map(item=>item===modified?{...item,task:value,isediting:!item.isediting}:item)
            }
            return{
                userData:completedTasks
            }
            }
            
        return state
        default:return state
    }
}

export default todoReducer