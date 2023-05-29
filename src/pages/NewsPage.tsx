import React from 'react';

import PostCreate from '../components/Profile/Posts/PostCreate/PostCreate';
import UserInfoCard from '../components/UserInfoCard';
import OffersUsers from '../components/OffersUsers';
import PostsNewsContainer from '../components/PostsNews';

const NewsPage = () => {
    return (
        <div className="flex w-full py-8 px-[6%] gap-2 justify-between overflow-auto">
            <UserInfoCard />
            <div>
                <PostCreate />
                <PostsNewsContainer />
            </div>
            <div>
                <OffersUsers />
                <OffersUsers />
            </div>
        </div>
    );
};

export default NewsPage;