import s from "./post.module.css"

const Post = (props) => {
    return (
        <div className= {s.content__comment}>
            <div className= {s.content__comment_item}>
                <div className={s.content__comment_ava}>
                    <div className= {s.content__comment_img}>
                    </div>
                    <div className={s.content__comment_name}>{props.name}</div>
                </div>
                <div className= {s.content__comment_text}>{props.text}</div>
                <div className={s.content__comment_like}><span className="heart"></span> <span className="count">{props.likeCount}</span></div>
            </div>

        </div>
    )
};

export default Post;