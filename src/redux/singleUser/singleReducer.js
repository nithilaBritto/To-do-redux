import { USER_DETAIL} from "./singleType";

const initialState={
    id:0,
    name:''
}

const singleReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_DETAIL:
            const {id,name}=action.payload
            return{
            ...state,
            id:id,
            name:name
        }
        default: return state
    }
}

export default singleReducer