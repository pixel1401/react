import { connect } from "react-redux";
import React from "react";
import s from "./users.module.css";
import { changePageAction, followAction, setUsersAction, totalCountAction } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";


class UserContainerAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.curPage}`)
            .then((res) => {
                this.props.setUsersAction(res.data.items)
                this.props.totalCount(res.data.totalCount)
            })
    }

    positionCurPageOfArr = 1;


    changeFollow = (e) => {
        let value = e.target.dataset.followed === 'false' ? false : true;
        let id = e.target.closest(`.${s.users__item}`).id;
        this.props.followAction(value, id);
    }

    activePage = (e, pos) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${e}`).then((response) => {
            this.props.setUsersAction(response.data.items)
            this.props.totalCount(response.data.totalCount)
        })
        
        let index = (pos !== undefined) ? +((pos.nativeEvent.path[0]).dataset.index) : 0;
        let posCurPage = index + 1;
        this.props.changePageAction(e, posCurPage);

    }



    render() {
        return <Users
            changeFollow={this.changeFollow}
            activePage={this.activePage}
            users = {this.props.users}
            count={this.props.count}
            totalItemsProps={this.props.totalItemsProps}
            curPage={this.props.curPage}
            positionCurPageOfArr= {this.props.positionCurPageOfArr}
        />
    }

}




let mapToProps = (state) => {
    return {
        users: state.users.usersPage,
        count: state.users.count,
        totalItemsProps: state.users.totalItems,
        curPage: state.users.currentPage,
        positionCurPageOfArr: state.users.posPage,

    }
}

let mapToDispatch = (dispatch) => {
    return {
        followAction: (value, id) => dispatch(followAction(value, id)),
        setUsersAction: (usersArr) => dispatch(setUsersAction(usersArr)),
        changePageAction: (numPage , posPage) => dispatch(changePageAction(numPage , posPage)),
        totalCount: (num) => dispatch(totalCountAction(num))
    }
}

const UsersContainer = connect(mapToProps, mapToDispatch)(UserContainerAPI)

export default UsersContainer;