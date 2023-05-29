import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../Avatar/Avatar';
import { AiOutlineUserAdd } from 'react-icons/ai';

const FollowersList = ({ fullname, avatar, last_seen, _id }: any) => {
    return (
        <div className="flex items-center justify-between text-white gap-2 pb-4">
            <div className="flex items-center justify-between">
                <Avatar avatar={avatar} size={60} />
                <div className="flex flex-col items-start ml-4">
                    <NavLink to={`/profile/${_id}`}>
                        <h4>{fullname}</h4>
                    </NavLink>
                    <span>{last_seen}</span>
                </div>
            </div>
            <AiOutlineUserAdd size={20} />
        </div>
    );
};

export default FollowersList;