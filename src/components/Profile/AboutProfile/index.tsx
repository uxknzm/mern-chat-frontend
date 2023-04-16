import React, { useState } from 'react';

import axios from "../../../core/axios"
import { aboutUser, getStatus } from '../../../redux/slices/aboutUserSlice';
import { useSelector } from 'react-redux';
import { aboutMe, profileMe } from '../../../redux/slices/profileSlice';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ButtonsProfile from './ButtonsProfile/ButtonsProfile';
import ModalUpdateAvatar from './ModalUpdateAvatar/ModalUpdateAvatar';
import { useAppDispatch } from '../../../redux/store';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { CiImageOn } from "react-icons/ci";
import ModalPhotoAvatar from './ModalPhotoAvatar/ModalPhotoAvatar';

const AboutProfile = () => {
    // selectors
    const { avatar, fullname, id: profileId }: any = useSelector(aboutUser);
    const { id: myId, avatar: myAvatar }: any = useSelector(aboutMe);
    const status = useSelector(getStatus);
    const isMe = myId === profileId;

    // dispatch
    const dispatch = useAppDispatch();

    // locale state
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleFullAvatar, setModalVisibleFullAvatar] = useState(false);

    const items = [
        isMe && {
            key: '1',
            label: (
                <div onClick={() => setModalVisible(true)}>
                    <div className='flex items-center'>
                        <AiOutlineCloudUpload size={18} />
                        <span className='pl-2'>Upload photo</span>
                    </div>
                </div>
            )
        },
        {
            key: "2",
            label: (
                <div onClick={() => setModalVisibleFullAvatar(true)}>
                    <div className='flex items-center'>
                        <CiImageOn size={18} />
                        <span className='pl-2'>Open photo</span>
                    </div>
                </div>
            )
        }
    ];


    // methods
    const uploadHandler = ({ onSuccess, onError, file }: any) => {
        const data = new FormData();
        data.append('file', file);
        axios.post(`/user/${profileId}/avatar`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(() => {
                onSuccess("ok");
            })
            .catch((err) => {
                onError(err);
            })
    };

    const onOk = () => {
        dispatch(profileMe());
    };

    const onClose = () => {
        setModalVisible(false)
    };

    const onCloseFullPhoto = () => {
        setModalVisibleFullAvatar(false)
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
            <ModalUpdateAvatar
                open={modalVisible}
                uploadHandler={uploadHandler}
                onCancel={onClose}
                onOk={onOk}
            />
            <ModalPhotoAvatar
                open={modalVisibleFullAvatar}
                onClose={onCloseFullPhoto}
                avatar={avatar}
                myAvatar={myAvatar}
                fullname={fullname}
            />
            <ButtonsProfile isMe={isMe} />
        </div>
    );
};

export default AboutProfile;