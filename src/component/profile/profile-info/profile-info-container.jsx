import React from "react";
import { addPostActionCreator, updateText } from "../../../redux/profile-reducer";
import ProfileInfo from "./profile-info.jsx";

    const profileInfoContainer = (props)=> {
        let state = props.store.getState();
        
        let showText = ()=> {
            props.store.dispatch(addPostActionCreator())
        }

        const postChange = (body)=> { 
            props.store.dispatch(updateText(body));
        }


        return (
            <ProfileInfo newText={state.profileComponent.newText} addPostActionCreator={showText} updateText={postChange} />
        )
}

export default profileInfoContainer;