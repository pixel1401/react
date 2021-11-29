import s from "./profile.module.css"
import Post from "./post/post"
import ProfileInfo from "./profile-info/profile-info"



// DATABASE 



const Profile = (props) => {

  let postElem = props.base.postsBase.map((p,i)=> <Post key={i} name={p.name} likeCount={p.likeCount} text={p.text} />)
  
    return (
      <main className={s.content}>
            <ProfileInfo 
            addPost={props.addPost}
            newText={props.newText}
            updateNewTextPost={props.updateNewTextPost}
            />
            {postElem}
      </main>
    )
};

export default Profile;