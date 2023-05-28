import React from 'react';
import CardComponent from '../Card';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import ViewsProfile from './ViewsProfile/ViewsProfile';
import { useSelector } from 'react-redux';
import { aboutMe } from '../../redux/slices/profileSlice';

const UserInfoCard = () => {
    const info = useSelector(aboutMe);
    const { fullname, isOnline, avatar, email, _id }: any = info;
    
    return (
        <CardComponent width={430} height={420} >
            <ProfileInfo fullname={fullname} isOnline={isOnline} avatar={avatar} id={_id} />
            <hr className="border-solid border-white my-5 mx-0" />
            <PersonalInfo email={email} />
            <ViewsProfile />
        </CardComponent >
    );
};

export default UserInfoCard;