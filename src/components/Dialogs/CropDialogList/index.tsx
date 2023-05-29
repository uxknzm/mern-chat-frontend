import { Badge } from 'antd';
import React from 'react';
import Avatar from '../../Avatar/Avatar';
import classNames from 'classnames';

const CropDialogList = ({
    _id,
    onSelectDialog,
    onSelectPartherId,
    isSelectedDialog,
    partner,
    lastMessage,
    userId,
    author
}: any) => {
    if (!partner || !userId || !author) {
        return null;
    };

    partner = partner.id !== userId ? partner : author;
    const isMe = lastMessage.user._id === userId;

    return (
        <div
            onClick={() => {
                onSelectDialog(_id);
                onSelectPartherId(partner.id);
            }}
            className={classNames('px-5 py-4 flex items-center cursor-pointer mt-5', { "bg-zinc-800": isSelectedDialog(_id), "bg-gray-50": !isMe && !lastMessage.read })}>
            <Badge dot={partner.isOnline} color='green' offset={[-4, 43]}>
                <Avatar avatar={partner.avatar} size={45} />
            </Badge>
        </div>
    );
};

export default CropDialogList;