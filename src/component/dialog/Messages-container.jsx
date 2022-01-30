import { connect } from "react-redux";
import { compose } from "redux";
import { addMessagesThunk } from "../../redux/message-reducer";
import { getDialog, getMessages } from "../../redux/selectors";
import { AuthRedirect } from "../isAuthRedirect";
import Dialog from "./Messages";







const mapPropsToState = (state) => {
    return {
        dialogs: getDialog(state) ,
        messages: getMessages(state)
    }
}



export default compose(
    connect(mapPropsToState, { addMessagesThunk }),
    AuthRedirect
)(Dialog);




