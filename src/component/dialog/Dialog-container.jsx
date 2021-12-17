// import { NavLink } from "react-router-dom";
import React from "react";
import StoreContext from "../../context";
import { addMessages, printMessages } from "../../redux/message-reducer";
import Dialog from "./Dialog";




// SEND HTML
const DialogContainer = (props) => {


    return (

        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();
                    let dialog_component = state.dialogComponent;
                    let dispatch = store.dispatch;

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

            }
        </StoreContext.Consumer>


    )
}


export default DialogContainer;