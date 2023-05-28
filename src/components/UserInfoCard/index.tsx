import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CardComponent from '../Card';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import ViewsProfile from './ViewsProfile/ViewsProfile';
import { aboutUser, fetchUserAbout } from '../../redux/slices/aboutUserSlice';
import { useAppDispatch } from '../../redux/store';
import { aboutMe } from '../../redux/slices/profileSlice';

const UserInfoCard = () => {
    const { id } = useParams();
    const user = useSelector(aboutUser);
    const me = useSelector(aboutMe);
    const dispatch = useAppDispatch();

    const fetchUser = async (id: string) => {
        //@ts-ignore
        await dispatch(fetchUserAbout(id));
    };

    useEffect(() => {
        console.log(id);
        if (id) {
            fetchUser(id);
        };
    }, [id]);

    return (
        <CardComponent width={430} height={420} >
            <ProfileInfo
                //@ts-ignore
                fullname={id ? user.fullname : me.fullname}
                //@ts-ignore
                isOnline={id ? user.isOnline : me.isOnline}
                //@ts-ignore
                avatar={id ? user.avatar : me.avatar}
                //@ts-ignore
                id={id ? user._id : me._id}
            />
            <hr className="border-solid border-white my-5 mx-0" />
            <PersonalInfo
                //@ts-ignore
                email={id ? user.email : me.email}
            />
            <ViewsProfile />
        </CardComponent >
    );
};

export default UserInfoCard;