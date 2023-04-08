import React from 'react';
import PostCard from './PostCard/PostCard';
import PostCreate from './PostCreate/PostCreate';

const Posts = ({ fullname, value, index }: any) => {
    if (value === index) {
        return (
            <div className="pt-8">
                <PostCreate fullname={fullname} />
                <PostCard fullname={fullname} />
            </div>
        );
    } else { 
        return null;
    }
};

export default Posts;