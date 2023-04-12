import { isToday, format } from 'date-fns';
import React from 'react';
import MessageNotAvatarL from './MessageNotAvatarL';
import Avatar from '../../Avatar/Avatar';

const getMessageTime = (createdAt: any) => {
    if (isToday(createdAt)) {
        return format(createdAt, 'HH:mm');
    } else {
        return format(createdAt, 'dd.MM.yyyy');
    }
};

const getNextMessage = (array: any, value: any) => {
    const index = array.indexOf(value);
    const next = array[index + 1]; // след сообщение 
    const prev = array[index - 1]; // предыдущение сообщение
    return next;
};

const LeftMessage = ({ message, arrayMessage, isTyping }: any) => {

    const nextMessage = getNextMessage(arrayMessage, message);
    const dateMessage = getMessageTime(new Date(message.createdAt));

    if (nextMessage && message.user._id === nextMessage.user._id) {
        return <MessageNotAvatarL date={dateMessage} text={message.text} fullname={message.user.fullname} />
    };

    return (
        <div className="flex mb-2 items-end">
            <Avatar avatar={message.user.avatar} size={10} />
            <div className="rounded ml-2 py-2 px-3 rounded-t-xl rounded-br-xl break-all min-w-22 max-w-lg" style={{ backgroundColor: "#F2F2F2" }}>
                <p className="text-sm mt-1">
                    {message.text}
                </p>
                <p className="text-right ml-32 text-xs text-gray-400">
                    {getMessageTime(new Date(message.createdAt))}
                </p>
            </div>
        </div>
    );
};

export default LeftMessage;