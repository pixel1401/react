import { connect } from "react-redux";
import React from "react";
// import s from "./users.module.css";
import { arrPosPageAC, changeFollowTh, changePageAction, followAction, getUsers, IsFetchingAction, isProgres, setUsersAction, totalCountAction } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../preloader/preloader";
import { getApi } from "../../api";
import { AuthRedirect } from "../isAuthRedirect";


class UserContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.count, this.props.curPage);
        
    }



    // changeFollow = (e) => {
    //     let value = e.target.dataset.followed === 'false' ? false : true;
    //     let id = e.target.closest(`.${s.users__item}`).id;
    //     this.props.followAction(value, id);
    // }

    activePage = (e, pos) => {
        this.props.isFetching(true)
        getApi.getActivePage(this.props.count , e).then((response) => {
            this.props.setUsersAction(response.data.items)
            this.props.totalCount(response.data.totalCount)
            this.props.isFetching(false)
        })

        let index = (pos !== undefined) ? +((pos.nativeEvent.path[0]).dataset.index) : 0;
        let posCurPage = index + 1;
        this.props.changePageAction(e, posCurPage);

    }



    render() {
        // if(!this.props.isAuth) return <Redirect to={`/works`}/>
        return <>
            {this.props.isFetchingProps ? <Preloader /> : null}
            <Users {...this.props}
                activePage={this.activePage}
                // changeFollow={this.changeFollow}
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
        changeFollowTh: (id, isFollow) => dispatch(changeFollowTh(id, isFollow))
        
    }
}

let RedirectAuth = AuthRedirect(UserContainerAPI);


const UsersContainer = connect(mapToProps, mapToDispatch)(RedirectAuth)

export default UsersContainer;