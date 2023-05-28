import React from 'react';
import PostCreate from '../components/Profile/Posts/PostCreate/PostCreate';
import PostCard from '../components/Profile/Posts/PostCard/PostCard';
import UserInfoCard from '../components/UserInfoCard';
import OffersUsers from '../components/OffersUsers';
import PostsNewsContainer from '../components/PostsNews';

const NewsPage = () => {
    return (
        <div style={{
            width: "100%",
            padding: "2rem 6%",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "space-between",
            overflow: "auto"
        }} className="pt-8">
            <UserInfoCard />
            <div>
                <PostCreate />
                <PostsNewsContainer />
            </div>
            <OffersUsers />
        </div>
    );
};

export default NewsPage;