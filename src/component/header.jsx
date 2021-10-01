import s from "./header.module.css"


const Header = () => {
    return (
        <header className= {s.header}>
            <div className= {s.header__logo}><img src="https://xakep.ru/wp-content/uploads/post/61196/logo2.png" alt="header-logo"></img></div>
        </header>
    )
}

export default Header;