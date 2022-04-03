import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New post</div>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                <Post message = {'Hellow'} likeCount = {15}/>
                <Post message = {'world'} likeCount = {25}/>
            </div>
        </div>);
}

export default MyPosts;