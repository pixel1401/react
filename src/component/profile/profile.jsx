import s from "./profile.module.css"
import Post from "./post/post"



// DATABASE 
let posts =[
  {name:"Egor" ,likeCount:"25" , text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  {name:"Ana" ,likeCount:"25K" , text:"It is a long established fact that a reader will be distracted by the readable content o"},
  {name:"Kill" ,likeCount:"0" , text:"It is fine"},
]



const Profile = () => {

  let postElem = posts.map((p,i)=> <Post key={i} name={p.name} likeCount={p.likeCount} text={p.text} />)
  
  
    return (
      <main className={s.content}>
        <div className={s.content__img}>
          <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="content-img"></img>
        </div>
        <div className={s.content__profile}>
          <div className={s.content__profile_img}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HXBNEcPO8DOwEs0Zx7owwqcGvkv_s-9TJA&usqp=CAU" alt="img"></img>
          </div>
          <div className={s.content__profile_info}>
            <h3 className={`${s.content__profile_info}  ${s.content__profile_name}`} >First S.N</h3>
            <div className= {`${s.content__profile_info} , ${s.content__profile_born}`}>Date of Birth: 1 April </div>
            <div className= {`${s.content__profile_info}  ${s.content__profile_city}`} >City: Aktobe</div>
            <div className= {`${s.content__profile_info}  ${s.content__profile_education}`}>BSU' 66</div>
            <div className= {`${s.content__profile_info}  ${s.content__profile_site}`}>Web sity:https://fugicar1.ru</div>
          </div>
          <form  className={s.content__post}>
            <h3 className= {s.content__post_title}>My post</h3>
            <textarea placeholder="your news..."></textarea>
            <button type="submit">Send</button>
          </form>
            {postElem}
        </div>
      </main>
    )
};

export default Profile;