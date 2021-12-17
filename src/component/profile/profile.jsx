import s from "./profile.module.css"
import Post from "./post/post"
import ProfileInfoContainer from "./profile-info/profile-info-container"
import StoreContext from "../../context";



// DATABASE 





const Profile = (props) => {


  return (

    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          let postElem = state.profileComponent.postsBase.map((p, i) => <Post key={i} name={p.name} likeCount={p.likeCount} text={p.text} />)

          return (
            <main className={s.content}>
              <ProfileInfoContainer store={store} />
              {postElem}
            </main>
          )
        }
      }
    </StoreContext.Consumer>



  )
};

export default Profile;