import React from "react";
import s from "./Header.module.css";


const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png'/>
        </header>
    );
}

export default Header;