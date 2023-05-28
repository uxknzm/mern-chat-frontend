import React from 'react';

import UserInfoCard from '../components/UserInfoCard';
import PostCreate from '../components/Profile/Posts/PostCreate/PostCreate';
import PostsNewsContainer from '../components/PostsNews';
import FollowersContainer from '../components/Folowers';

const ProfilePage = () => {
    return (
        <div className="flex w-full py-8 px-[6%] gap-2 justify-between overflow-auto">
            <UserInfoCard />
            <div>
                <PostCreate />
                <PostsNewsContainer />
            </div>
            <div>
                <FollowersContainer />
            </div>
        </div>
    );
};

export default ProfilePage;