import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";

export type DialogItemPropsType = {
    name: string
    id: number
}

export type MessageItemPropsType = {
    message: string
    id: number
}


const usersData: DialogItemPropsType[] = [
    {name: 'User 1', id: 1},
    {name: 'User 2', id: 2},
    {name: 'User 3', id: 3},
    {name: 'User 4', id: 4},
    {name: 'User 5', id: 5},
    {name: 'User 5', id: 6}
]

const usersMessagesData: MessageItemPropsType[] = [
    {message: 'Message 1', id: 1},
    {message: 'Message 2', id: 2},
    {message: 'Message 3', id: 3},
    {message: 'Message 4', id: 4},
    {message: 'Message 5', id: 5},
    {message: 'Message 6', id: 6},
]

export function Dialogs() {

    const usersDataMap = usersData.map(n => <DialogItem name={n.name} id={n.id}/>);
    const usersMessagesDataMap = usersMessagesData.map(n => <MessageItem message={n.message} id={n.id}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.users}>
                    {usersDataMap}
                </div>
                <div className={s.messages}>
                    {usersMessagesDataMap}
                </div>
            </div>
        </div>
    )
}