import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";


const DialogItem = (props) => {
    return (
        <NavLink to={`/dialog/${props.id}`}  className={s.dialog__contact_item}>
            <span className={s.dialog__contact_point}></span>
            <div className={s.dialog__contact_name}>{props.name}</div>
        </NavLink>
    )
}


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



const Dialog = (props) => {
    return (
        <div className = {s.dialog}>
                <div className={`title ${s.dialog__title}`}>Dialog</div>
                <div className={s.dialog__contact}>
                    <DialogItem name="Andrew Class" id="1"/>
                    <DialogItem name="Dmitry" id="2"/>
                    <DialogItem name="Sasha" id="3"/>
                    <DialogItem name="Sveta" id="4"/>
                    <DialogItem name="Valera" id="5"/>
                    <DialogItem name="Victor" id="6"/>
                    
                </div>

                <div className={s.dialog__window}>
                    <DialogWindow who="mine" name="Me" text="I am a normal popover and I can have text and everything Erzhan"/>
                    <DialogWindow who="aline" name="Victor" text="I am a  popover and I can have text and everything Erzhan"/>
                    <DialogWindow who="aline" name="Victor" text="I am a  popover and I can have text and everything Erzhan"/>
                    <DialogWindow who="mine" name="Me" text="I am a normal popover "/>
                    <DialogWindow who="mine" name="Me" text="I am a normal popover awdad wad awd awd"/>
                </div>
        </div>
    )
}

export default Dialog;