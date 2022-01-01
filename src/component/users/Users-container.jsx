import { connect } from "react-redux";
import React from "react";
import s from "./users.module.css";
import { arrPosPageAC, changePageAction, followAction, IsFetchingAction, setUsersAction, totalCountAction } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../preloader/preloader";


class UserContainerAPI extends React.Component {
    componentDidMount() {
        this.props.isFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.curPage}`, {
            withCredentials: true

        })
            .then((res) => {
                this.props.setUsersAction(res.data.items)
                this.props.totalCount(res.data.totalCount)
                this.props.isFetching(false)
            })
    }



    changeFollow = (e) => {
        let value = e.target.dataset.followed === 'false' ? false : true;
        let id = e.target.closest(`.${s.users__item}`).id;
        this.props.followAction(value, id);
    }

    activePage = (e, pos) => {
        this.props.isFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${e}`, {
            withCredentials: true
        }).then((response) => {
            this.props.setUsersAction(response.data.items)
            this.props.totalCount(response.data.totalCount)
            this.props.isFetching(false)
        })

        let index = (pos !== undefined) ? +((pos.nativeEvent.path[0]).dataset.index) : 0;
        let posCurPage = index + 1;
        this.props.changePageAction(e, posCurPage);

    }



    render() {
        return <>
            {this.props.isFetchingProps ? <Preloader /> : null}
            <Users {...this.props}
                activePage={this.activePage}
                changeFollow={this.changeFollow}
            />
        </>
    }

}




let mapToProps = (state) => {
    return {
        users: state.users.usersPage,
        count: state.users.count,
        // totalItemsProps: state.users.totalItems,
        curPage: state.users.currentPage,
        // positionCurPageOfArr: state.users.posPage,
        isFetchingProps: state.users.isFetching,
        // arrPosPage: state.users.arrPositionPage,
        totalNumOfPages: state.users.totalNumOfPages,

        arrPage: state.users.arrPage,
        isLastPage: state.users.isLastPage,
        countPages: state.users.countPages

    }
}

let mapToDispatch = (dispatch) => {
    return {
        followAction: (value, id) => dispatch(followAction(value, id)),
        setUsersAction: (usersArr) => dispatch(setUsersAction(usersArr)),
        changePageAction: (numPage, posPage) => dispatch(changePageAction(numPage, posPage)),
        totalCount: (num) => dispatch(totalCountAction(num)),
        isFetching: (bool) => dispatch(IsFetchingAction(bool)),
        arrPosPageAC: (arr) => dispatch(arrPosPageAC(arr))
    }
}

const UsersContainer = connect(mapToProps, mapToDispatch)(UserContainerAPI)

export default UsersContainer;