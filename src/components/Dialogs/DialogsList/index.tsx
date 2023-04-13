import classNames from 'classnames';
import React from 'react';
import { isToday, format } from 'date-fns';

import IconRead from '../../IconRead';
import Avatar from '../../Avatar/Avatar';

const getMessageTime = (createdAt: any) => {
    if (isToday(createdAt)) {
        return format(createdAt, 'HH:mm');
    } else {
        return format(createdAt, 'dd.MM.yyyy');
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
    setSelectDialog,
    setSelectedUserId,
    isSelected,
    partner,
    lastMessage,
    userId,
    author
}: any) => {    
    partner = partner.id !== userId ? partner : author;
    const isMe = lastMessage.user._id === userId;
    return (
        <div
            onClick={() => {
                setSelectDialog(_id);
                setSelectedUserId(partner.id);
            }}
            className={classNames('px-5 py-4 flex items-center cursor-pointer', { "bg-gray-50": isSelected(_id) })}>
            <Avatar avatar={partner.avatar} size={12} />
            <div className="w-full">
                <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">{partner.fullname}</span>
                    <div className='flex items-baseline'>
                        {isMe && <IconRead isReaded={lastMessage.read} />}
                        <span className="block ml-2 text-sm text-gray-600">{getMessageTime(new Date(lastMessage.createdAt))}</span>
                    </div>
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