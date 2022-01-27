import React from "react";
import { compose } from "redux";
import Login from "./Login";
import { connect } from "react-redux";
import { logInThunk } from "../../redux/login-reducer";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

let mapDispatchToProps = (state)=> {
    let login = state.login;
    return {
        email: login.email,
        password: login.password,
        rememberMe: login.rememberMe,
        captcha: login.captcha
    }
}

export default compose(
    connect(mapDispatchToProps, { logInThunk}) ,
)(LoginContainer);