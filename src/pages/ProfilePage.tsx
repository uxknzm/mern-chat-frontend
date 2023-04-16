import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../redux/store';
import { fetchUserAbout } from '../redux/slices/aboutUserSlice';

import AboutProfile from '../components/Profile/AboutProfile';
import PersonalInfo from '../components/Profile/PersonalInfo';
import TabsContainer from '../components/Profile/Tabs';

const ProfilePage = () => {
    const { id } = useParams();

    // dispatch
    const dispatch = useAppDispatch();

    useEffect(() => {
        //@ts-ignore
        id && dispatch(fetchUserAbout(id))
    }, [id]);

    return (
        <div className="p-4 w-full overflow-auto">
            <AboutProfile />
            <div className="my-4 flex">
                <PersonalInfo />
                <div className="bg-white flex-1 w-full rounded-lg shadow-xl p-8 ml-4">
                    <TabsContainer />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;