import s from "../sidebar.module.css";
import { NavLink } from "react-router-dom";
import defaultImg from "../../../assets/img/UsersDefault.jpg"

const friendsLink = (props) => {
    let state = props.followedUsers;

    let itemLink;
    (state && (
        itemLink = state.map((e, i) => {
            return (
                <NavLink key={i} to={`/profile/${e.id}/${e.followed}`} className={s.nav__friends_item} activeClassName={s.active}>
                    <div className={s.nav__friends_ava}>
                        <img src={`${(e.photos.small) ? e.photos.small : defaultImg }`} alt="ava" />
                    </div>
                    <div className={s.nav__friends_name}>{e.name}</div>
                    <div className={s.nav__friends_id}>{e.id}</div>
                </NavLink>
            )
        })
    ))






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