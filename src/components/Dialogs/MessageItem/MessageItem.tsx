import s from "../Dialogs.module.css";
import React from "react";
import {MessageItemPropsType} from "../Dialogs";

export function MessageItem({message}: MessageItemPropsType) {
    return <div className={s.message}>{message}</div>
}