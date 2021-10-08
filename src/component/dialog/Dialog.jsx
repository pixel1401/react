import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";
const Dialog = (props) => {
    return (
        <div className = {s.dialog}>
                <div className={`title ${s.dialog__title}`}>Dialog</div>
                <div className={s.dialog__contact}>
                    <NavLink to="/item"  className={s.dialog__contact_item}>
                        <span className={s.dialog__contact_point}></span>
                        <div className={s.dialog__contact_name}>Andrew</div>
                    </NavLink>
                    <NavLink to="/item" className={s.dialog__contact_item}>
                        <span className={s.dialog__contact_point}></span>
                        <div className={s.dialog__contact_name}>Dmitry</div>
                    </NavLink>
                    <NavLink to="/item" className={s.dialog__contact_item}>
                        <span className={s.dialog__contact_point}></span>
                        <div className={s.dialog__contact_name}>Sasha</div>
                    </NavLink>
                    <NavLink to="/item" className={s.dialog__contact_item}>
                        <span className={s.dialog__contact_point}></span>
                        <div className={s.dialog__contact_name}>Sveta</div>
                    </NavLink>
                    <NavLink to="/item" className={s.dialog__contact_item}>
                        <span className={s.dialog__contact_point}></span>
                        <div className={s.dialog__contact_name}>Valera</div>
                    </NavLink>
                    <NavLink to="/item" className={s.dialog__contact_item}>
                        <span className={s.dialog__contact_point}></span>
                        <div className={s.dialog__contact_name}>Victor</div>
                    </NavLink>
                </div>
                <div className={s.dialog__window}>
                    <div className={`${s.dialog__window_item} ${s.dialog__window_aline}`}>
                        <div className={s.dialog__window_icon}>
                            <div className={s.dialog__window_img}>
                            </div>    
                            <div className={s.dialog__window_name}>Victor</div>    
                        </div>
                        <div className={s.dialog__window_text}>I am a normal popover and I can have text and everything</div>                       
                    </div>
                    <div className={`${s.dialog__window_item}  ${s.dialog__window_mine}`}>
                        <div className={s.dialog__window_icon}>
                            <div className={s.dialog__window_img}>
                            </div>    
                            <div className={s.dialog__window_name}>Me</div>    
                        </div>
                        <div className={s.dialog__window_text}>I am a normal popover and I can have text and everything</div>
                    </div>
                    <div className={`${s.dialog__window_item} ${s.dialog__window_mine}`}>
                        <div className={s.dialog__window_icon}>
                            <div className={s.dialog__window_img}>
                            </div>    
                            <div className={s.dialog__window_name}>Me</div>    
                        </div>
                        <div className={s.dialog__window_text}>I am a normal popover </div>
                    </div>
                    <div className={`${s.dialog__window_item} ${s.dialog__window_aline}`}>
                        <div className={s.dialog__window_icon}>
                            <div className={s.dialog__window_img}>
                            </div>    
                            <div className={s.dialog__window_name}>Victor</div>    
                        </div>
                        <div className={s.dialog__window_text}>I am a normal popover and I can have text and everything</div>
                    </div>
                </div>
        </div>
    )
}

export default Dialog;