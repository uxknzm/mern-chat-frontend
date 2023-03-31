import { formatDuration, intervalToDuration } from 'date-fns';
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
const RightMessage = ({ username, userId, message }: any) => {

    return (
        <div className="flex justify-end mb-2 items-end">
            <div className="bg-blue-100 rounded mr-2 py-2 px-3 break-all max-w-lg">
                <p className="text-sm mt-1">
                    {message.text}
                </p>
                <p className="text-right text-xs text-grey-dark mt-1">
                    {getMessageTime(message.createdAt)}
                </p>
            </div>
            <AvatarMessage username={username} userId={userId} />
        </div>
        // <div className="flex justify-end mb-4">
        //     <div
        //         className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white break-all max-w-lg"
        //     >
        //         {message.text}
        //     </div>
        //     <AvatarMessage username={username} userId={userId} />
        // </div>
    );
};

export default RightMessage;