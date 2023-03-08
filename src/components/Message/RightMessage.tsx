import axios from 'axios';
import React from 'react';
import Avatar from '../Avatar/Avatar';

const RightMessage = ({ key, message, username, userId }: any) => {
    let date;
    if (message.createdAt) {
        date = new Date(message.createdAt).toLocaleString();
    } else {
        date = new Date().toLocaleString();
    };
    return (
        <div key={key} className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-end justify-start flex-row-reverse">
                <Avatar username={username} userId={userId} />
                <div
                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                    {message.file && (
                        <div className="">
                            <a target="_blank" className="flex items-center gap-1 border-b" href={axios.defaults.baseURL + '/uploads/' + message.file}>
                                <img src={`http://mern-chat-backend-production-118e.up.railway.app/uploads/${message.file}`} alt="message-file" width="300px" />
                            </a>
                        </div>)}
                    <div>{message.text}</div>
                    <span className="tracking-tighter text-gray-500 md:text-xs">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default RightMessage;