import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, alienProfileAC, getAlienProfile, updateText } from "../../redux/profile-reducer";
import ProfileInfo from "./profile-info/profile-info.jsx";
import { withRouter } from "react-router-dom";
import { AuthRedirect } from "../isAuthRedirect";


class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId !== undefined) {
            this.props.getAlienProfile(userId);
        }else {
            this.props.alienProfileAC(null)
        }

    }


    render() {

        return (
            <ProfileInfo {...this.props} />
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


let WithAuthRedirect = AuthRedirect(ProfileContainerAPI);

const ProfileRoute = withRouter(WithAuthRedirect)


const Profile = connect(mapStateToProps, { addPostActionCreator, updateText, alienProfileAC, getAlienProfile})(ProfileRoute)

export default Profile;