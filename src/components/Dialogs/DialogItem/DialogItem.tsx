import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

export function DialogItem({name, id}:DialogItemPropsType ) {
    return (
        <div className={s.user}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}