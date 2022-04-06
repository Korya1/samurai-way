import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    uName: string
    id: number
}

type MessageItemPropsType = {
    message:string
}


function DialogItem({uName, id}: DialogItemPropsType) {
    return (
        <div className={s.user}>
            <NavLink to={`/dialogs/${id}`}>{uName}</NavLink>
        </div>
    )
}


function MessageItem({message}: MessageItemPropsType) {
    return <div className={s.message}>{message}</div>
}

export function Dialogs() {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.users}>
                    <DialogItem uName={'User 1'} id={1}/>
                    <DialogItem uName={'User 2'} id={2}/>
                    <DialogItem uName={'User 3'} id={3}/>
                    <DialogItem uName={'User 4'} id={4}/>
                    <DialogItem uName={'User 5'} id={5}/>
                    <DialogItem uName={'User 6'} id={6}/>

                </div>
                <div className={s.messages}>
                    <MessageItem message={'Message 1'}/>
                    <MessageItem message={'Message 2'}/>
                    <MessageItem message={'Message 3'}/>
                    <MessageItem message={'Message 4'}/>
                    <MessageItem message={'Message 5'}/>
                    <MessageItem message={'Message 6'}/>
                </div>
            </div>
        </div>
    )
}