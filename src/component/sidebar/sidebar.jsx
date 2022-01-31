import { NavLink } from "react-router-dom";
import FriendsLink from "./friends-link/friends-link";
import s from "./sidebar.module.css"

const Sidbar = (props) => {


    return (
        <nav className={s.nav} >
            <NavLink to="/profile" activeClassName={s.active} className={s.nav__link}>Profile</NavLink>
            <NavLink to="/dialog" activeClassName={s.active} className={s.nav__link}>Massages</NavLink>
            <NavLink to="/news" className={s.nav__link} activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" className={s.nav__link} activeClassName={s.active} >Music</NavLink>
            <NavLink to="/setting" className={s.nav__link} activeClassName={s.active}>Settings</NavLink>
            <NavLink to="/works" className={s.nav__link} activeClassName={s.active} >Works</NavLink>
            <NavLink to="/users" className={s.nav__link} activeClassName={s.active}>Users</NavLink>
            <FriendsLink {...props} friendsLink={props.friendsLink} />
        </nav>
    )



};

export default Sidbar;