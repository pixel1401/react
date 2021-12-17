import { connect } from "react-redux";
import { addPostActionCreator, updateText } from "../../redux/profile-reducer";
import ProfileInfo from "./profile-info/profile-info.jsx";





const mapStateToProps = (state) => {
    return {
        postsBase: state.profileComponent.postsBase,
        newText: state.profileComponent.newText
    }
}

const mapDispatchToStore = (dispatch)=> {
    return {
        addPostActionCreator: ()=> dispatch(addPostActionCreator()),
        updateText: (body) => dispatch(updateText(body))
    }
}



const Profile = connect(mapStateToProps , mapDispatchToStore)(ProfileInfo)

export default Profile;