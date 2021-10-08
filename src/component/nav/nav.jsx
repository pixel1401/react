import { NavLink } from "react-router-dom";
import s from "./nav.module.css"

const Sidbar = () => {
    return (
        <nav className={s.nav} >
            <NavLink to="/profile" activeClassName={s.active} className= {s.nav__link}>Profile</NavLink>
            <NavLink to="/dialog"  activeClassName={s.active} className={s.nav__link}>Massages</NavLink>
            <NavLink to="/news" className={s.nav__link} activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" className={s.nav__link} activeClassName={s.active} >Music</NavLink>
            <NavLink to="/setting" className={s.nav__link} activeClassName={s.active}>Settings</NavLink>
        </nav>
    )
};

export default Sidbar;