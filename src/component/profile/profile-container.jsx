import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, alienProfileAC, getAlienProfile, updateText } from "../../redux/profile-reducer";
import Profile from "./profile-info/Profile.jsx";
import { withRouter } from "react-router-dom";
import { AuthRedirect } from "../isAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId !== undefined) {
            this.props.getAlienProfile(userId);
        } else {
            this.props.alienProfileAC(null)
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
        postsBase: state.profileComponent.postsBase,
        newText: state.profileComponent.newText,
        alienProfile: state.profileComponent.alienProfile

    }
}

// const mapDispatchToStore = (dispatch)=> {
//     return {
//         addPostActionCreator: ()=> dispatch(()),
//         updateText: (body) => dispatch(updateText(body))
//     }
// }


export default compose(
    connect(mapStateToProps, { addPostActionCreator, updateText, alienProfileAC, getAlienProfile }),
    withRouter,
    AuthRedirect
)(ProfileContainer);


// let WithAuthRedirect = AuthRedirect(ProfileContainer);

// const ProfileRoute = withRouter(WithAuthRedirect)


// const Profile = connect(mapStateToProps, { addPostActionCreator, updateText, alienProfileAC, getAlienProfile})(ProfileRoute)

// export default Profile;