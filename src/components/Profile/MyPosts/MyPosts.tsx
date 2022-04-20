import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post'
import {postsDataType} from '../../../redux/state';

type MyPostsPropsType = {
    postsData: postsDataType[]
    addNewPost: (addPost: string) => void
}

const MyPosts = ({postsData, addNewPost}: MyPostsPropsType) => {

    const PostsDataMap = postsData.map(n => <Post message={n.message} likeCount={n.likeCount} id={n.id}/>)

    const getRefTextarea = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(getRefTextarea.current){
            addNewPost(getRefTextarea.current.value);
            getRefTextarea.current.value = '';
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>New post</div>
            <div>
                <textarea ref={getRefTextarea}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {PostsDataMap}
            </div>
        </div>);
}

export default MyPosts;