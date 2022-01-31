import { connect } from "react-redux";
import { getFriends } from "../../redux/selectors";
import Sidbar from "./sidebar";


const mapPropsToState = (state)=> {
    return {
        followedUsers: getFriends(state)
    }
}


const SidebarContainer = connect(mapPropsToState)(Sidbar)

export default SidebarContainer;