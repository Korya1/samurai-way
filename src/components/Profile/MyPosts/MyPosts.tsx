import React from "react";
import s from "./MyPosts.module.css";
import {Post, PostPropsType} from "./Post/Post";

const PostsData: PostPropsType[] = [
    {message: 'Hello', likeCount: 15, id: 1},
    {message: 'world', likeCount: 25, id: 2}
]

const MyPosts = () => {

    const PostsDataMap = PostsData.map(n => <Post message={n.message} likeCount={n.likeCount} id={n.id}/>)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>New post</div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {PostsDataMap}
            </div>
        </div>);
}

export default MyPosts;