import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { setUserDataAC } from '../../redux/header-reducer'
import axios from 'axios';



class HeaderContainerAPI extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me" , {withCredentials :true}).then((res) => {
            if (res.data.resultCode === 0) {
                this.props.setUserDataAC(res.data.data)
            } 
        })
    }



    render() {
        return (
            <Header {...this.props} />
        )
    }
}





// 
const mapProps = (state) => {
    let header = state.header;
    return {
        login: header.login,
        id: header.id,
        email: header.email,
        isAuth: header.isAuth
    }
}


const HeaderContainer = connect(mapProps, { setUserDataAC })(HeaderContainerAPI)

export default HeaderContainer;