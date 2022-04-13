import s from "../Dialogs.module.css";
import React from "react";

type MessageItemPropsType = {
    message: string
    id: number
}

export function MessageItem({message, id}: MessageItemPropsType) {
    return <div className={s.message}>{message}</div>
}