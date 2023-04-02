import React from 'react';
import AvatarMessage from '../../AvatarMessage/AvatarMessage';

const MessageTyping = () => {
    return (
        <div className="flex mb-2 items-end">
            <AvatarMessage />
            <div className="rounded ml-2 py-2 px-3 rounded-t-xl rounded-br-xl break-all max-w-lg" style={{ backgroundColor: "#F2F2F2" }}>
                Набирает сообщение...
            </div>
        </div>
    );
};

export default MessageTyping;