import s from "./header.module.css"


const Header = (props) => {
    let Userauthorized = () => {
        return (
            <div>
                <div>{props.login}</div>
                <div>{props.id}</div>
                <div>{props.email}</div>
            </div>
        )
    }

    let UserUnauthorized = ()=> {
        return (
            <div>
                <button>Login up</button>
            </div>
        )
    }

    let auth = (props.isAuth === true) ? Userauthorized() : UserUnauthorized();


    return (
        <header className={s.header}>
            <div className={s.header__logo}><img src="https://xakep.ru/wp-content/uploads/post/61196/logo2.png" alt="header-logo"></img></div>
            {auth}
        </header>
    )
}

export default Header;