import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post"
import {postsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: postsDataType[]
}

const MyPosts = ({postsData}: MyPostsPropsType) => {

    const PostsDataMap = postsData.map(n => <Post message={n.message} likeCount={n.likeCount} id={n.id}/>)

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