import s from "../sidebar.module.css";
import { NavLink } from "react-router-dom";


const friendsLink = (props)=> {
    let state = props.friendsLink;


    let itemLink = state.map((e,i)=> {
        return (
            <NavLink key={i} to={`/friends/${e.id}`} className={s.nav__friends_item} activeClassName={s.active}>
                <div className={s.nav__friends_ava}></div>
                <div className={s.nav__friends_name}>{e.name}</div>
            </NavLink>
        )
    });


    return (
        <div className={s.nav__friends}>
            <NavLink to="/friends" className={s.nav__link} activeClassName={s.active}>Friends</NavLink>

            <div className={s.nav__friends_logos}>
                {itemLink}
            </div>
        </div>
    )
};


export default friendsLink;