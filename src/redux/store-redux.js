import {  applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import friendsReducer from "./frends-reducer";
import HeaderReducer from "./header-reducer";
import LoginReducer from "./login-reducer";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import worksReducer from "./works-reducer";

let reducers = combineReducers({
    profileComponent : profileReducer,
    dialogComponent : messageReducer,
    workComponent:worksReducer,
    friends:friendsReducer,
    users: usersReducer,
    header:HeaderReducer,
    login:LoginReducer
}) 
const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;