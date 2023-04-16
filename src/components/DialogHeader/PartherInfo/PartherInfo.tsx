import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../Avatar/Avatar';

const PartherInfo = ({ _id, avatar, fullname, last_seen }: any) => {
    return (
        <NavLink to={`/profile/${_id}`} className="flex items-center">
            <Avatar avatar={avatar} size={45} />
            <div>
                <p className="font-semibold ml-3 text-slate-600">{fullname}</p>
                <p className="text-xs font-semibold ml-3 text-gray-400">{last_seen}</p>
            </div>
        </NavLink>
    );
};

export default PartherInfo;