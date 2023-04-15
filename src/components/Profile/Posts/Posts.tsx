import React from 'react';

import { useSelector } from 'react-redux';
import { aboutUser, getStatus } from '../../../redux/slices/aboutUserSlice';

import PostCard from './PostCard/PostCard';
import PostCreate from './PostCreate/PostCreate';

const Posts = ({ value, index }: any) => {
    const { fullname }: any = useSelector(aboutUser);
    const status = useSelector(getStatus);

    if (status === "loading" || status === "") {
        return (
            <div className="spinner-container">
                <div className="loading-spinner" />
            </div>
        )
    };

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