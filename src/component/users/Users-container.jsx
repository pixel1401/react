import { connect } from "react-redux";
import React from "react";
import { arrPosPageAC, changeActivePagination, changeFollowTh, changePageAction, followAction, getUsers, IsFetchingAction, isProgres, setUsersAction, totalCountAction } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../preloader/preloader";
import { AuthRedirect } from "../isAuthRedirect";
import { compose } from "redux";


class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.count, this.props.curPage);
        
    }

    render() {
        return <>
            {this.props.isFetchingProps ? <Preloader /> : null}
            <Users {...this.props}
            />
        </>
    }

}




let mapToProps = (state) => {
    return {
        users: state.users.usersPage,
        count: state.users.count,
        curPage: state.users.currentPage,
        isFetchingProps: state.users.isFetching,
        totalNumOfPages: state.users.totalNumOfPages,

        arrPage: state.users.arrPage,
        isLastPage: state.users.isLastPage,
        countPages: state.users.countPages,

        progres:state.users.progres,

        // isAuth:state.header.isAuth

    }
}
let mapToDispatch = (dispatch) => {
    return {
        followAction: (value, id) => dispatch(followAction(value, id)),
        setUsersAction: (usersArr) => dispatch(setUsersAction(usersArr)),
        changePageAction: (numPage, posPage) => dispatch(changePageAction(numPage, posPage)),
        totalCount: (num) => dispatch(totalCountAction(num)),
        isFetching: (bool) => dispatch(IsFetchingAction(bool)),
        arrPosPageAC: (arr) => dispatch(arrPosPageAC(arr)),

        isProgres: (bool)=> dispatch(isProgres(bool)),

        getUsers: (count, curPage) => dispatch(getUsers(count, curPage)),
        changeFollowTh: (id, isFollow) => dispatch(changeFollowTh(id, isFollow)),
        changeActivePagination: (numPagination, eventClick) => dispatch(changeActivePagination(numPagination, eventClick))
        
        
    }
}

export default compose(
    connect(mapToProps, mapToDispatch),
    AuthRedirect
)(UserContainer);

// let RedirectAuth = AuthRedirect(UserContainer);


// const UsersContainer = connect(mapToProps, mapToDispatch)(RedirectAuth)

// export default UsersContainer;