import classNames from 'classnames';
import React from 'react';
import { isToday, format } from 'date-fns';
import { Badge } from 'antd';
import { VscCircleFilled } from "react-icons/vsc";

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
    onSelectDialog,
    onSelectPartherId,
    isSelectedDialog,
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
                onSelectDialog(_id);
                onSelectPartherId(partner.id);
            }}
            className={classNames('px-5 py-4 flex items-center cursor-pointer', { "bg-blue-50": isSelectedDialog(_id), "bg-gray-50": !isMe && !lastMessage.read })}>
            <Badge dot={partner.isOnline} color='green' offset={[-4, 43]}>
                <Avatar avatar={partner.avatar} size={45} />
            </Badge>
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
                    {!isMe && !lastMessage.read && (
                        <Badge
                            count={
                                <VscCircleFilled
                                    size={15}
                                    style={{
                                        color: '#f5222d',
                                    }}
                                />
                            } />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DialogsList;