import React from 'react';
import PostCard from '../Profile/Posts/PostCard/PostCard';

const PostsNewsContainer = () => {
    // тут у нас будет массив постов будем рисовать их все 

    return (
        <React.Fragment>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </React.Fragment>
    );
};

export default PostsNewsContainer;