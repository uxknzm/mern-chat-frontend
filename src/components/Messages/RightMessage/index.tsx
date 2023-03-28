import React from 'react';
import AvatarMessage from '../../AvatarMessage/AvatarMessage';

const RightMessage = ({ username, userId, message }: any) => {

    let date;

    if(message.createdAt) {
        date = new Date(message.createdAt);
    } else {
        date = new Date();
    };

    const createMessageTime = `${date.getHours()}:${date.getMinutes()} PM`;

    return (
        <div className="w-full flex justify-end mt-3">
            <div className="w-1/2">
                <div className="flex items-center justify-end">
                    <p className="font-semibold mr-3 text-sm text-slate-600">{username} <span
                        className="text-slate-400 text-xs">{createMessageTime}</span></p>
                    <AvatarMessage username={username} userId={userId} />
                </div>

                <div className="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                    <p className="text-sm text-white w-full break-all">
                        {message.text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RightMessage;