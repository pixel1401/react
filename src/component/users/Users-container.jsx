import { connect } from "react-redux";
import { changePageAction, followAction, setUsersAction, totalCountAction } from "../../redux/users-reducer";
import Users from "./Users";


let mapToProps = (state)=>{
    return {
        users: state.users.usersPage,
        count:state.users.count,
        totalItemsProps: state.users.totalItems,
        curPage: state.users.currentPage

    }
}

let mapToDispatch = (dispatch)=> {
    return {
        followAction:(value , id )=> dispatch(followAction(value , id)),
        setUsersAction:(usersArr)=> dispatch(setUsersAction(usersArr)),
        changePageAction:(numPage)=> dispatch(changePageAction(numPage)),
        totalCount:(num)=> dispatch(totalCountAction(num))
    }
}

const UsersContainer = connect(mapToProps, mapToDispatch)(Users)

export default UsersContainer;