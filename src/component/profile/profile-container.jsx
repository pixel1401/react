import React from "react";
import { connect } from "react-redux";
import { addPostThunk, profileAC, getProfile, changeStatusTh } from "../../redux/profile-reducer";
import Profile from "./profile-info/Profile.jsx";
import { withRouter } from "react-router-dom";
import { AuthRedirect } from "../isAuthRedirect";
import { compose } from "redux";
import { getId, getMyStatus, getPosts, getStatus, getProfileSelect, isProgress, is_Profile_and_Status } from "../../redux/selectors";
import { changeFollowTh } from "../../redux/users-reducer";
import Preloader from "../preloader/preloader";

class ProfileContainer extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            isMe:true,
        }
    }

    // через урл получить ид узера , если нет показать свой профиль
    getUserIdFromURL () {
        if (!this.props.match.params.userId) {
            this.state.userId = this.props.myId ;
            this.setState({
                userId: this.props.myId,
                isMe: true
            })
        }else {
            this.state.userId = this.props.match.params.userId;
            this.setState({
                userId: this.props.match.params.userId,
                isMe:false
            })
        }

        if (this.state.userId !== undefined) {
            this.props.getProfile(this.state.userId);
        } else {
            this.props.profileAC(null);
        }
    }


    componentDidMount() {
        this.getUserIdFromURL()
    }


    
    componentDidUpdate(props , state) {
        // Показываем другого пользователя 
        if ((this.state.userId !== this.props.match.params.userId) && this.props.match.params.userId) {
            return   this.getUserIdFromURL()
        } else if ((this.state.userId !== this.props.myId) && !this.props.match.params.userId ){
            // Если урл нет ид , то показываем себя
            return   this.getUserIdFromURL()
        }else{
            return null;
        }
    }



    render() {
        if(!this.props.isProfile) return <Preloader/>
        return (
            <Profile {...this.props}
                isFollow={this.props.match.params.followed}
                isMe={this.state.isMe}

            />
        )

    }
}


const mapStateToProps = (state) => {
    return {
        postsBase: getPosts(state),
        profile: getProfileSelect(state),
        myId: getId(state),
        userStatus: getStatus(state),
        myStatus: getMyStatus(state),

        progres: isProgress(state),

        isProfile: is_Profile_and_Status(state)

    }
}

// const mapDispatchToStore = (dispatch)=> {
//     return {
//         addPostActionCreator: ()=> dispatch(()),
//         updateText: (body) => dispatch(updateText(body))
//     }
// }



export default compose(
    connect(mapStateToProps, { addPostThunk, profileAC, getProfile, changeStatusTh, changeFollowTh }),
    withRouter,
    AuthRedirect
)(ProfileContainer);


// let WithAuthRedirect = AuthRedirect(ProfileContainer);

// const ProfileRoute = withRouter(WithAuthRedirect)


// const Profile = connect(mapStateToProps, { addPostActionCreator, updateText, alienProfileAC, getAlienProfile})(ProfileRoute)

// export default Profile;