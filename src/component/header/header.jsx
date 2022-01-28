// import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import React from "react";
import s from "./header.module.css"
import { NavLink, Redirect } from "react-router-dom";


class Header extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
    }


    setRedirect() {
        this.props.logOutThunk()
        // this.state.redirect =/ true;
        // this.forceUpdate()
    }

    Userauthorized() {
        return (
            <>
                <div className={s.header__ava}>
                    <div className={s.header__img_box}>
                        <img src="#" alt="ava" />
                    </div>
                    <div className={s.header__ava_info}>
                        <div className={s.header__name}>{this.props.login}</div>
                        <div className={s.header__email}>{this.props.email}</div>
                        <div className={s.header__id}>{this.props.id}</div>
                    </div>

                </div>
                <NavLink className={s.header__btn} to={'/login'} onClick={() => this.setRedirect()}>
                    <span>Log out</span>
                </NavLink>
            </>
        )
    }

    UserUnauthorized() {
        return (
            <div>
                <NavLink className={s.header__btn} to={`/login`}><span>Log in</span></NavLink>
            </div>
        )
    }


    auth() { return (this.props.isAuth) ? this.Userauthorized() : this.UserUnauthorized() };


    render() {



        return (
            <header className={s.header}>
                <div className={s.header__logo}><img src="https://xakep.ru/wp-content/uploads/post/61196/logo2.png" alt="header-logo"></img></div>
                {this.auth()}
            </header>
        )
    }
}

export default Header;