import { isToday, format } from 'date-fns';
import * as ContextMenu from "@radix-ui/react-context-menu";
import React from 'react';
import AvatarMessage from '../../AvatarMessage/AvatarMessage';
import MessageNotAvatarR from './MessageNotAvatarR';
import ContextMenuContent from '../../ContextMenuContent';


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

const RightMessage = ({ message, arrayMessage }: any) => {

    const nextMessage = getNextMessage(arrayMessage, message);
    const dateMessage = getMessageTime(new Date(message.createdAt));

    if (nextMessage && message.user._id === nextMessage.user._id) {
        return <MessageNotAvatarR date={dateMessage} text={message.text} />
    };

    return (
        <div className="flex justify-end mb-2 items-end">
            <div className="bg-blue-100 rounded-t-xl rounded-bl-xl mr-2 py-2 px-3 break-all max-w-lg ">
                <ContextMenu.Root>
                    <ContextMenu.Trigger>
                        <p className="text-sm mt-1">
                            {message.text}
                        </p>
                        <p className="text-right text-xs text-gray-400">
                            {dateMessage}
                        </p>
                    </ContextMenu.Trigger>
                    <ContextMenuContent />
                </ContextMenu.Root>
            </div>
            <AvatarMessage username={message.user.fullname} userId={message.user._id} />
        </div>
    );
};

export default RightMessage;