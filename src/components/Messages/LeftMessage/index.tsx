import { intervalToDuration } from 'date-fns';
import React from 'react';
import AvatarMessage from '../../AvatarMessage/AvatarMessage';

const getMessageTime = (createdAt: any) => {
    let duration = intervalToDuration({
        start: new Date(createdAt),
        end: new Date(),
    })

   
    const formatted = `${duration.hours}:${duration.minutes}`;
    return formatted;
};

const LeftMessage = ({ message }: any) => {

    if (!message.user && (!message.user.fullname || !message.user._id)) {
        return null;
    };

    return (
        <div className="flex mb-2 items-end">
            <AvatarMessage username={message.user.fullname} userId={message.user._id} />
            <div className="rounded ml-2 py-2 px-3 break-all max-w-lg" style={{ backgroundColor: "#F2F2F2" }}>
                <p className="text-sm text-teal">
                    {message.user.fullname}
                </p>
                <p className="text-sm mt-1">
                    {message.text}
                </p>
                <p className="text-left text-xs text-grey-dark mt-1">
                    {getMessageTime(message.createdAt)}
                </p>
            </div>
        </div>
        // <div className="flex justify-start mb-4">
        //     <AvatarMessage username={message.user.fullname} userId={message.user._id} />
        //     <div
        //         className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white break-all max-w-lg"
        //     >
        //         {message.text}
        //     </div>
        // </div>
    );
};

export default LeftMessage;