import { USER_DETAIL } from "./singleType";

export const currentUserDetail=(id,name)=>{
    return{
        type:USER_DETAIL,
        payload:{
            id,
            name
        }
    }
}