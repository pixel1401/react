import { connect } from "react-redux";
import { compose } from "redux";
import { addMessagesThunk} from "../../redux/message-reducer";
import { AuthRedirect } from "../isAuthRedirect";
import Dialog from "./Dialog";






const mapPropsToState = (state) => {
    let dialog_component = state.dialogComponent;
    return {
        dialogs: dialog_component.dialogs,
        messages: dialog_component.messages,
    }
}



export default compose(
    connect(mapPropsToState, { addMessagesThunk }),
    AuthRedirect
)(Dialog);




