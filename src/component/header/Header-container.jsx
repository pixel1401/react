import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { getMeTh, setUserDataAC } from '../../redux/header-reducer'
import { logOutThunk } from '../../redux/login-reducer';



class HeaderContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getMeTh();
        
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

const HeaderContainer = connect(mapProps, { setUserDataAC, getMeTh, logOutThunk })(HeaderContainerAPI)

export default HeaderContainer;