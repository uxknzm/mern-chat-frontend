import React from 'react';

import axios from "../../../core/axios"
import { aboutUser, getStatus } from '../../../redux/slices/aboutUserSlice';
import { useSelector } from 'react-redux';
import { aboutMe } from '../../../redux/slices/profileSlice';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ButtonsProfile from './ButtonsProfile/ButtonsProfile';


const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
];

const AboutProfile = () => {
    // selectors
    const { avatar, fullname, id: profileId }: any = useSelector(aboutUser);
    const { id: myId }: any = useSelector(aboutMe);
    const status = useSelector(getStatus);
    const isMe = myId === profileId;

    // methods
    const uploadHandler = (event: any) => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append("user_id", profileId);
        axios.post(`/user/${profileId}/avatar`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log(res);
        })
    };

    if (status === "loading" || status === "") {
        return (
            <div className="spinner-container">
                <div className="loading-spinner" />
            </div>
        )
    };

    return (
        <div className="bg-white rounded-lg shadow-xl pb-8">
            <ProfileAvatar
                items={items}
                uploadHandler={uploadHandler}
                avatar={avatar}
                fullname={fullname}
                isMe={isMe}
                profileId={profileId}
            />
            <ButtonsProfile isMe={isMe} />
        </div>
    );
};

export default AboutProfile;