import s from "./post.module.css"

const Post = () => {
    return (
        <div className= {s.content__comment}>
            <div className= {s.content__comment_item}>
              <div className= {s.content__comment_img}>
              </div>
              <div className= {s.content__comment_text}>Hey,why nobody love me?</div>
            </div>

        </div>
    )
};

export default Post;