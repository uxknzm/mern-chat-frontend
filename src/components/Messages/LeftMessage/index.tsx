import React from 'react';
import AvatarMessage from '../../AvatarMessage/AvatarMessage';

const LeftMessage = ({ interlocutor, message }: any) => {
    
    let date;

    if(message.createdAt) {
        date = new Date(message.createdAt);
    } else {
        date = new Date();
    };

    const createMessageTime = `${date.getHours()}:${date.getMinutes()} PM`;

    if (!interlocutor && (!interlocutor.username || !interlocutor._id)) {
        return null;
    };

    return (
        <div className="w-full flex flex-start mt-3">
            <div className="w-1/2">
                <div className="flex items-center">
                    <AvatarMessage username={interlocutor.username} userId={interlocutor._id} />
                    <p className="font-semibold ml-3 text-sm text-slate-600">{interlocutor.username} <span
                        className="text-slate-400 text-xs">{createMessageTime}</span></p>
                </div>

                <div className="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                    <p className="text-sm text-slate-500 w-full break-all">
                        {message.text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeftMessage;