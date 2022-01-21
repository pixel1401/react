// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addMessages, printMessages } from "../../redux/message-reducer";
import { AuthRedirect } from "../isAuthRedirect";
import Dialog from "./Dialog";






const mapPropsToState = (state) => {
    let dialog_component = state.dialogComponent;
    return {
        dialogs: dialog_component.dialogs,
        messages: dialog_component.messages,
        change_text: dialog_component.change_text
    }
}


// const mapDispatchToStore = (dispatch)=> {
//     return{
//         printMessages: (text) => dispatch(printMessages(text)),
//         addMessages: () => dispatch(addMessages())
//     }
// }

let WithAuthRedirect = AuthRedirect(Dialog);


const DialogContainer = connect(mapPropsToState, { printMessages, addMessages })(WithAuthRedirect);


export default DialogContainer;