import React from "react";
import { connect } from "react-redux";
// import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


let mapToProps = (state) => {
    return {
        isAuth:state.header.isAuth
    }
}

export const AuthRedirect = (Component)=> {
    class withRedirect extends React.Component {
        render () {
            if(!this.props.isAuth) return <Redirect to='/works'/>
            return <>
                <Component {...this.props}/>
            </>
                        
        }
    }

    let withRedirectState = connect(mapToProps)(withRedirect);
    return withRedirectState;
};



