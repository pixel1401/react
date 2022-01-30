import React from "react";
import { connect } from "react-redux";
// import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isAuth, isLoading } from "../redux/selectors";
import Preloader from "./preloader/preloader";


let mapToProps = (state) => {
    return {
        isAuth: isAuth(state),
        isLoading: isLoading(state)
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



