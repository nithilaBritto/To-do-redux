import { GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS } from "./userType"

const initialState={
    loading:false,
    id:0,
    users:[],
    error:''
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_USER_REQUEST:
            return{
            ...state,loading:true
        }
        case GET_USER_SUCCESS:
        // console.log(action.payload)   
        const {id,users} =action.payload
        // console.log(users)
        return{
            ...state,
            loading:false,
            id:id,
            users:users,
            error:''
        }
        case GET_USER_ERROR:return{
            ...state,
            loading:true,
            users:[],
            error:action.payload
        }
        default:return state
    }
}

export default userReducer