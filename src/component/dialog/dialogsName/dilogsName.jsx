import { NavLink } from "react-router-dom";
import s from "./../Dialog.module.css";



const DialogItem = (props) => {
    return (
        <NavLink to={`/dialog/${props.id}`}  className={s.dialog__contact_item}>
            <span className={s.dialog__contact_point}></span>
            <div className={s.dialog__contact_name}>{props.name}</div>
        </NavLink>
    )
}


export default DialogItem;