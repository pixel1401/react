import React from "react";
import { compose } from "redux";
import Login from "./Login";
import { connect } from "react-redux";
import { logInThunk, logOutThunk } from "../../redux/login-reducer";
import { isAuth, isFetching, showTextErrorLogin } from "../../redux/selectors";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

let mapDispatchToProps = (state)=> {
    return {
        isAuth:isAuth(state),
        isFetching:isFetching(state),
        loginError: showTextErrorLogin(state)
        // email: login.email,
        // password: login.password,
        // rememberMe: login.rememberMe,
        // captcha: login.captcha
    }
}

export default compose(
    connect(mapDispatchToProps, { logInThunk}) ,
)(LoginContainer);