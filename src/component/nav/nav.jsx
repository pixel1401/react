import s from "./nav.module.css"

const Sidbar = () => {
    return (
        <nav className={s.nav} >
            <a href="/profile" className= {s.nav__link}>Profile</a>
            <a href="/dialog" className={s.nav__link}>Massages</a>
            <a href="#" className={s.nav__link}>News</a>
            <a href="#" className={s.nav__link}>Music</a>
            <a href="#" className={s.nav__link}>Settings</a>
        </nav>
    )
};

export default Sidbar;