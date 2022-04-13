import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsState: dialogsPageType
}

export function Dialogs({dialogsState}: DialogsPropsType) {

    const usersDataMap = dialogsState.usersData.map(n => <DialogItem name={n.name} id={n.id}/>);
    const usersMessagesDataMap = dialogsState.usersMessagesData.map(n => <MessageItem message={n.message} id={n.id}/>)

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