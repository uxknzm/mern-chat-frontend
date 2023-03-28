import React from 'react';
import AvatarDialog from '../AvatarDialog/AvatarDialog';

const DialogHeader = ({ interlocutor, onlinePeoples }: any) => {

    if (!interlocutor) {
        return null;
    };

    const isOnline = onlinePeoples[interlocutor._id] ? true : false;
    
    return (
        <div className="h-16 border flex justify-between items-center w-full px-5 py-2 shadow-sm">
            <div className="flex items-center">
                <AvatarDialog username={interlocutor.username} userId={interlocutor._id} online={isOnline} />
                    <p className="font-semibold ml-3 text-slate-600">{interlocutor.username}</p>
            </div>
            <div className="flex items-center space-x-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-9 bg-slate-50 rounded-full stroke-slate-400 p-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>

            </div>
        </div>
    );
};

export default DialogHeader;