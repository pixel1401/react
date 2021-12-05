import s from "./../Dialog.module.css";



const DialogWindow = (props)=> {
    let who = s["dialog__window_" + props.who];

    return (
        <div className={`${s.dialog__window_item} ${who}`}>
                <div className={s.dialog__window_icon}>
                        <div className={s.dialog__window_img}>
                        </div>    
                <div className={s.dialog__window_name}>{props.name}</div>    
            </div>
            <div className={s.dialog__window_text}>{props.text}</div>                       
        </div>
    )
}


export default DialogWindow;
