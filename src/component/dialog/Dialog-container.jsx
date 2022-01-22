import { connect } from "react-redux";
import { compose } from "redux";
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



export default compose(
    connect(mapPropsToState, { printMessages, addMessages }),
    AuthRedirect
)(Dialog);




