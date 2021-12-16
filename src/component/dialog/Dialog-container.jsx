// import { NavLink } from "react-router-dom";
import React from "react";
import { addMessages, printMessages } from "../../redux/message-reducer";
import Dialog from "./Dialog";




// SEND HTML
const DialogContainer = (props) => {

    let state = props.store.getState();
    let dialog_component = state.dialogComponent;
    let dispatch = props.store.dispatch;

    let changeText = (body) => {
        dispatch(printMessages(body));
    }

    let send = () => {
        dispatch(addMessages());
    }

    return (
        <Dialog printMessages={changeText}
            addMessages={send}
            dialogs={dialog_component.dialogs}
            messages={dialog_component.messages}
            change_text={dialog_component.change_text}
        />
    )
}


export default DialogContainer;