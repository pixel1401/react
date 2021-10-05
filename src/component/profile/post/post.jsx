import s from "./post.module.css"

const Post = (props) => {
    return (
        <div className= {s.content__comment}>
            <div className= {s.content__comment_item}>
              <div className= {s.content__comment_img}>
              </div>
              <div className= {s.content__comment_text}>{props.name}  {props.age}  {props.color}  {props.height}</div>
            </div>

        </div>
    )
};

export default Post;