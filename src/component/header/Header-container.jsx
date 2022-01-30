import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { getMeTh, setUserDataAC } from '../../redux/header-reducer'
import { logOutThunk } from '../../redux/login-reducer';
import { getEmail, getId, getLogin, isAuth } from '../../redux/selectors';



class HeaderContainerAPI extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}





// 
const mapProps = (state) => {
    // let header = state.header;
    return {
        login: getLogin(state),
        id: getId(state),
        email: getEmail(state),
        isAuth: isAuth(state)
    }
}

const HeaderContainer = connect(mapProps, { setUserDataAC, getMeTh, logOutThunk })(HeaderContainerAPI)

export default HeaderContainer;