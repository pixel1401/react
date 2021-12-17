// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addMessages, printMessages } from "../../redux/message-reducer";
import Dialog from "./Dialog";






const mapPropsToState = (state) => {
    let dialog_component = state.dialogComponent;
    return {
        dialogs: dialog_component.dialogs,
        messages: dialog_component.messages,
        change_text: dialog_component.change_text
    }
}


const mapDispatchToStore = (dispatch)=> {
    return{
        printMessages: (text) => dispatch(printMessages(text)),
        addMessages: () => dispatch(addMessages())
    }
}

const DialogContainer = connect(mapPropsToState, mapDispatchToStore)(Dialog);


export default DialogContainer;