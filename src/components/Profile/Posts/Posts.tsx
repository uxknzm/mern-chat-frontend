import React from 'react';

import { useSelector } from 'react-redux';
import { aboutUser, getStatus } from '../../../redux/slices/aboutUserSlice';

import PostCard from './PostCard/PostCard';
import PostCreate from './PostCreate/PostCreate';
import { aboutMe } from '../../../redux/slices/profileSlice';

const Posts = ({ value, index }: any) => {

    // selectors
    const { fullname, avatar, id: profileId }: any = useSelector(aboutUser);
    const { id: myId, avatar: myAvatar }: any = useSelector(aboutMe);
    const status = useSelector(getStatus);
    const isMe = myId === profileId;

    if (status === "loading" || status === "") {
        return (
            <div className="spinner-container">
                <div className="loading-spinner" />
            </div>
        );
    };

    if (value === index) {
        return (
            <div className="pt-8">
                {isMe && <PostCreate fullname={fullname} avatar={myAvatar} />}
                <PostCard fullname={fullname} avatar={avatar} myAvatar={myAvatar} />
            </div>
        );
    } else { 
        return null;
    }
};

export default Posts;