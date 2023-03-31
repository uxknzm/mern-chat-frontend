import classNames from 'classnames';
import React from 'react';
import { isToday, format } from 'date-fns';

import AvatarDialog from '../../AvatarDialog/AvatarDialog';

const getMessageTime = (createdAt: any) => {
    if (isToday(createdAt)) {
        return format(createdAt, 'HH:mm');
    } else {
        return format(createdAt, 'DD.MM.YYYY');
    }
};

const renderLastMessage = (message: any, userId: any) => {
    let text = '';
    if (!message.text && message.attachments.length) {
        text = 'прикрепленный файл';
    } else {
        text = message.text;
    }

    return `${message.user._id === userId ? 'Вы: ' : ''}${text}`;
};

const DialogsList = ({
    _id,
    setSelectedUserId,
    undread,
    created_at,
    text,
    isMe,
    isSelected,
    partner,
    lastMessage,
    userId,
    author
}: any) => {
    partner = partner.id !== userId ? partner : author;
    
    return (
        <div
            onClick={() => setSelectedUserId(_id)}
            className={classNames('px-5 py-4 flex items-center cursor-pointer border-l-4 border-t border-b', { "border-l-blue-500 bg-white": isSelected(_id) })}>
            <AvatarDialog userId={_id} username={partner.fullname} online={partner.isOnline} />
            <div className="w-full">
                <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">{partner.fullname}</span>
                    <span className="block ml-2 text-sm text-gray-600">{getMessageTime(new Date(lastMessage.createdAt))}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="block ml-2 text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis w-24">{renderLastMessage(lastMessage, userId)}</span>
                    {/* {!lastMessage.read && (<span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">New message!</span>)} */}
                </div>
            </div>
        </div>
    );
};

export default DialogsList;