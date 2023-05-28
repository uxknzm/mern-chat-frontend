import React from 'react';
import CardComponent from '../Card';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import ViewsProfile from './ViewsProfile/ViewsProfile';
import { useSelector } from 'react-redux';
import { aboutMe } from '../../redux/slices/profileSlice';

const UserInfoCard = () => {
    const info = useSelector(aboutMe);
    const { fullname, isOnline, avatar, email }: any = info;
    
    return (
        <CardComponent width={430} >
            <ProfileInfo fullname={fullname} isOnline={isOnline} avatar={avatar} />
            <hr style={{
                borderWidth: "0px 0px thin",
                borderStyle: "solid",
                borderColor: "rgba(255, 255, 255, 0.12)",
                margin: "1.25rem 0px",
            }} />
            <PersonalInfo email={email} />
            <ViewsProfile />
        </CardComponent >
    );
};

export default UserInfoCard;