import s from "./profile.module.css"
import Post from "./post/post"
import ProfileInfoContainer from "./profile-info/profile-info-container"



// DATABASE 





const Profile = (props) => {
  let state = props.store.getState();
  
  let postElem = state.profileComponent.postsBase.map((p,i)=> <Post key={i} name={p.name} likeCount={p.likeCount} text={p.text} />)
  
    return (
      <main className={s.content}>
            <ProfileInfoContainer
              store={props.store} 
              // dispatch={props.dispatch}
              // newText={props.base.newText}
            />
            {postElem}
      </main>
    )
};

export default Profile;