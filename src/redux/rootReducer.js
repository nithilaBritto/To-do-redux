import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import singleReducer from "./singleUser/singleReducer";
import todoReducer from "./userTodos/userTodosReducer";

const rootReducer=combineReducers({
    userReducer:userReducer,
    userDetail:singleReducer,
    usertodo:todoReducer
})

export default rootReducer