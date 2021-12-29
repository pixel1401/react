import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addPostActionCreator, alienProfileAC, updateText } from "../../redux/profile-reducer";
import ProfileInfo from "./profile-info/profile-info.jsx";
import { withRouter } from "react-router-dom";



class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId !== undefined) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((res) => {
                this.props.alienProfileAC(res.data)
            })
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


const ProfileRoute = withRouter(ProfileContainerAPI)


const Profile = connect(mapStateToProps, { addPostActionCreator, updateText, alienProfileAC })(ProfileRoute)

export default Profile;