import {  combineReducers, createStore } from "redux";
import friendsReducer from "./frends-reducer";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import worksReducer from "./works-reducer";


let reducers = combineReducers({
    profileComponent : profileReducer,
    dialogComponent : messageReducer,
    workComponent:worksReducer,
    friends:friendsReducer
}) 


const store = createStore(reducers);

export default store;