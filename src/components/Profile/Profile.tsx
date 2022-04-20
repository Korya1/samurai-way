import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType ={
    profileState: profilePageType
    addPost: (addPost: string) => void
}


export function Profile({profileState, addPost}:ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={profileState.postsData} addNewPost={addPost}/>
        </div>
    );
}