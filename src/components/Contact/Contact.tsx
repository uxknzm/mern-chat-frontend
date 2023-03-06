import classNames from 'classnames';
import React from 'react';
import Avatar from '../Avatar/Avatar';

const Contact = ({ id, username, onClick, selected, online }: any) => {


    return (
        <button key={id} onClick={() => onClick(id)} className={classNames("flex flex-row items-center hover:bg-gray-100 rounded-xl p-2", {
            "bg-gray-100": selected
        })}>
            <Avatar online={online} username={username} userId={id} />
            <div className="ml-2 text-sm font-semibold">{username}</div>
        </button>
    );
};

export default Contact;