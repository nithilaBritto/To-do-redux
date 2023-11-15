import { GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_ERROR } from "./userType";
import axios from "axios";

export function getUserRequest(){
    return{
        type:GET_USER_REQUEST
    }
}

export function getUserSuccess(id,users){
    return{
        type:GET_USER_SUCCESS,
        payload:{
            id,
            users
        }
    }
}

export function getUserError(error){
    return{
        type:GET_USER_ERROR,
        payload:error
    }
}

export const fetchUser=()=>{
    return (dispatch)=>{
        dispatch(getUserRequest())
        axios.get("https://jsonplaceholder.org/users")
        .then(response=>{
            const user=response.data.map(item=>item.firstname).slice(0,10)
            const id=(response.data.map(item=>item.id)).slice(0,10)
            dispatch(getUserSuccess(id,user))
        })
        .catch(error=>{
            console.log(error.response.status)
            dispatch(getUserError(error.response.status))
        })
    }
}