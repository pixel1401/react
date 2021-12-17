import { connect } from "react-redux";
import Sidbar from "./sidebar";


const mapPropsToState = (state)=> {
    return {
        friendsLink: state.friends.friendsLink
    }
}


const SidebarContainer = connect(mapPropsToState)(Sidbar)

export default SidebarContainer;