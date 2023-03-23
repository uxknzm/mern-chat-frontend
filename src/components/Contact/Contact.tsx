import React from 'react';
import Avatar from '../Avatar/Avatar';

const Contact = ({ id, username, online }: any) => {


    return (
        <div key={id} className="flex flex-row items-center">
            <Avatar online={online} username={username} userId={id} />
            <div className="ml-2 text-sm font-semibold">{username}</div>
        </div>
    );
};

export default Contact;