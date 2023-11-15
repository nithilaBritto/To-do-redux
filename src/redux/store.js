import { legacy_createStore as createStore,applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
// const subscribe=store.subscribe(()=>console.log(store.getState()))
export default store