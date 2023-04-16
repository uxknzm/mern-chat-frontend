import { isToday, format } from 'date-fns';
import React from 'react';
import MessageNotAvatarL from './MessageNotAvatarL';
import Avatar from '../../Avatar/Avatar';
import { NavLink } from 'react-router-dom';

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
    return prev;
};

const LeftMessage = ({ message, arrayMessage, isTyping }: any) => {

    if (!message) {
        return null;
    };

    const prevMessage = getNextMessage(arrayMessage, message);
    const dateMessage = getMessageTime(new Date(message.createdAt));

    if (prevMessage && message.user._id === prevMessage.user._id) {
        return <div className="w-full flex flex-start overflow-y-auto">
            <div className="w-1/2">
                <div className="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                    <p className=" text-sm text-slate-500">
                        {message.text}
                    </p>
                </div>
            </div>
        </div>
    };

    return (
        <div className="w-full flex flex-start overflow-y-auto">
            <div className="w-1/2">
                <NavLink to={`/profile/${message.user._id}`} className="flex items-center">
                    <Avatar avatar={message.user.avatar} size={25} />
                    <p className="font-semibold ml-3 text-sm text-slate-600">{message.user.fullname} <span
                        className="text-slate-400 text-xs">{dateMessage}</span></p>
                </NavLink>

                <div className="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                    <p className=" text-sm text-slate-500">
                        {message.text}
                    </p>
                </div>
            </div>
        </div>
        // <div className="flex mb-2 items-end">
        //     <Avatar avatar={message.user.avatar} size={10} />
        //     <div className="rounded ml-2 py-2 px-3 rounded-t-xl rounded-br-xl break-all min-w-22 max-w-lg" style={{ backgroundColor: "#F2F2F2" }}>
        //         <p className="text-sm mt-1">
        //             {message.text}
        //         </p>
        //         <p className="text-right ml-32 text-xs text-gray-400">
        //             {getMessageTime(new Date(message.createdAt))}
        //         </p>
        //     </div>
        // </div>
    );
};

export default LeftMessage;