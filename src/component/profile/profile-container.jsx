import React from "react";
import { connect } from "react-redux";
import { addPostThunk, profileAC, getProfile, changeStatusTh } from "../../redux/profile-reducer";
import Profile from "./profile-info/Profile.jsx";
import { withRouter } from "react-router-dom";
import { AuthRedirect } from "../isAuthRedirect";
import { compose } from "redux";
import { getId, getMyStatus, getPosts, getStatus, getProfileSelect } from "../../redux/selectors";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId)  userId = this.props.myId;
        
        if (userId !== undefined) {
            this.props.getProfile(userId);
        } else {
            this.props.profileAC(null);
        }
    }


    render() {

        return (
            <Profile {...this.props} />
        )

    }
}



const mapStateToProps = (state) => {
    return {
        postsBase: getPosts(state),
        profile: getProfileSelect(state),
        myId: getId(state),
        userStatus: getStatus(state),
        myStatus:getMyStatus(state)

    }
}

// const mapDispatchToStore = (dispatch)=> {
//     return {
//         addPostActionCreator: ()=> dispatch(()),
//         updateText: (body) => dispatch(updateText(body))
//     }
// }


export default compose(
    connect(mapStateToProps, { addPostThunk,  profileAC, getProfile, changeStatusTh }),
    withRouter,
    AuthRedirect
)(ProfileContainer);


// let WithAuthRedirect = AuthRedirect(ProfileContainer);

// const ProfileRoute = withRouter(WithAuthRedirect)


// const Profile = connect(mapStateToProps, { addPostActionCreator, updateText, alienProfileAC, getAlienProfile})(ProfileRoute)

// export default Profile;