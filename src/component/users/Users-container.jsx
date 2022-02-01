import { connect } from "react-redux";
import React from "react";
import { arrPosPageAC, changeFollowTh, changePageAction, followAction, getUsers, IsFetchingAction, isProgres, setUsersAction, totalCountAction } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../preloader/preloader";
import { AuthRedirect } from "../isAuthRedirect";
import { compose } from "redux";
import { getArrPagnitations, getCountUsersFirstPage, getCurrentPage, getFirstPageCountPagnitations, getTotalPages, getUsersSelect, isFetchingUsers, isLastPagnitation, isProgress } from "../../redux/selectors";


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
        users: getUsersSelect(state),
        countPages: getFirstPageCountPagnitations(state),
        curPage: getCurrentPage(state),
        isFetchingProps: isFetchingUsers(state),
        totalNumOfPages: getTotalPages(state),

        arrPage: getArrPagnitations(state),
        isLastPage: isLastPagnitation(state),
        count: getCountUsersFirstPage(state),

        progres:isProgress(state),

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
        
        
    }
}

export default compose(
    connect(mapToProps, mapToDispatch),
    AuthRedirect
)(UserContainer);

// let RedirectAuth = AuthRedirect(UserContainer);


// const UsersContainer = connect(mapToProps, mapToDispatch)(RedirectAuth)

// export default UsersContainer;