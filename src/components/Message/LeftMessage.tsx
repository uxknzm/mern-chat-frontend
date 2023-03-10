import React from 'react';
import Avatar from '../Avatar/Avatar';

const LeftMessage = ({ key, message, allUser, selectedUserId }: any) => {
    console.log(message.file);

    const currentUser = allUser.find((user: any) => {
        return user._id === selectedUserId;
    });

    let date;
    if (message.createdAt) {
        date = new Date(message.createdAt).toLocaleString();
    } else {
        date = new Date().toLocaleString();
    };
    return (
        <div key={key} className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-end">
                <Avatar username={currentUser.username} userId={currentUser._id} />
                <div
                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                    {message.file && <div className="">
                        <img src={`http://mern-chat-backend-production-118e.up.railway.app/uploads/${message.file}`} alt="message-file" width="300px" />
                    </div>}
                    <div>{message.text}</div>
                    <span className="tracking-tighter text-gray-500 md:text-xs">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default LeftMessage;