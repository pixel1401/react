import React from "react";
import s from "../profile.module.css";


    
    const profileInfo = (props)=> {
        const newPost = React.createRef();
        let showText = (e)=> {
            props.dispatch({type:"add-post"})
        }

        const postChange = (e)=> {
            props.dispatch({ type: "updateNewTextPost", newText: newPost.current.value})
        }


    return (
        <div className={s.content__profile}>
            <div className={s.content__img}>
                <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="content-img"></img>
            </div>
            <div className={s.content__profile_img}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HXBNEcPO8DOwEs0Zx7owwqcGvkv_s-9TJA&usqp=CAU" alt="img"></img>
            </div>
            <div className={s.content__profile_info}>
                <h3 className={`${s.content__profile_info}  ${s.content__profile_name}`} >First S.N</h3>
                <div className={`${s.content__profile_info}  ${s.content__profile_born}`}>Date of Birth: 1 April </div>
                <div className={`${s.content__profile_info}  ${s.content__profile_city}`} >City: Aktobe</div>
                <div className={`${s.content__profile_info}  ${s.content__profile_education}`}>BSU' 66</div>
                <div className={`${s.content__profile_info}  ${s.content__profile_site}`}>Web sity:https://fugicar1.ru</div>
            </div>
            <div className={s.content__post}>
                <h3 className={s.content__post_title}>My post</h3>
                <textarea ref={newPost} onChange={postChange} value={props.newText}  placeholder="your post" ></textarea>
                <button onClick={showText} type="submit">Send</button>
            </div>  
        </div>
    )
}

export default profileInfo;