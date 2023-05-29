import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import Avatar from '../../Avatar/Avatar';
import { NavLink } from 'react-router-dom';

const ProfileInfo = ({ fullname, isOnline, avatar, id }: any) => {
    return (
        <div className="flex justify-between items-center text-slate-200 gap-2 pb-4">
            <div className="flex justify-between items-center">
                <Avatar size={60} avatar={avatar} />
                <div className="flex flex-col items-start ml-4">
                    <NavLink to={`/profile/${id}`}>
                        <h3 className="font-bold">{fullname}</h3>
                    </NavLink>
                    <div className="flex justify-between items-center pt-[0.4rem] w-[11rem]">
                        <span>0 followers</span>
                        <span>0 following</span>
                    </div>
                </div>
            </div>
            <AiOutlineSetting size={20} />
        </div>
    );
};

export default ProfileInfo;