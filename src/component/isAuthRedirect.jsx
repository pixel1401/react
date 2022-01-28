import React from "react";
import { connect } from "react-redux";
// import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Preloader from "./preloader/preloader";


let mapToProps = (state) => {
    return {
        isAuth: state.header.isAuth,
        isLoading: state.header.isLoading
    }
}

export const AuthRedirect = (Component) => {
    class withRedirect extends React.Component {
        render() {
            if (!this.props.isAuth && !this.props.isLoading) {
                return <Redirect to='/login' />
            } else if (!this.props.isAuth && this.props.isLoading) {
                return <>
                    <Preloader />
                </>
            } else {
                return <>
                    <Component {...this.props} />
                </>
            }

        }
    }

    let withRedirectState = connect(mapToProps)(withRedirect);
    return withRedirectState;
};



