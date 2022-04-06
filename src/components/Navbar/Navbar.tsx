import React from "react";
import {NavLinkProps} from "react-router-dom";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";


export function Navbar() {
    const setActive = (d: { isActive: boolean }) => d.isActive ? s.active : '';

    return (
        <nav className={s.content}>
            <div className={s.item}>
                <NavLink to={'/'} className={setActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} className={setActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} className={setActive}>Settings</NavLink>
            </div>
        </nav>
    );
}

function RefAttributes<T>() {
    throw new Error("Function not implemented.");
}
