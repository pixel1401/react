import { connect } from "react-redux";
import { followAction, setUsersAction } from "../../redux/users-reducer";
import Users from "./Users";


let mapToProps = (state)=>{
    return {
        users: state.users.usersPage
    }
}

let mapToDispatch = (dispatch)=> {
    return {
        followAction:(value , id )=> dispatch(followAction(value , id)),
        setUsersAction:(usersArr)=> dispatch(setUsersAction(usersArr))
    }
}

const UsersContainer = connect(mapToProps, mapToDispatch)(Users)

export default UsersContainer;