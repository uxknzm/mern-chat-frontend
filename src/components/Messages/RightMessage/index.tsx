import { isToday, format } from 'date-fns';
import * as ContextMenu from "@radix-ui/react-context-menu";
import React from 'react';
import MessageNotAvatarR from './MessageNotAvatarR';
import ContextMenuContent from '../../ContextMenuContent';
import { useAppDispatch } from '../../../redux/store';
import { removeMessage } from '../../../redux/slices/messagesSlice';
import { removeDialog } from '../../../redux/slices/dialogsSlice';
import Avatar from '../../Avatar/Avatar';
import IconRead from '../../IconRead';
import { NavLink } from 'react-router-dom';

// TASK перекинуть в отдельную утилиту так как мы юзаем не только тут главный грех дублирование кода
const getMessageTime = (createdAt: any) => {
    if (isToday(createdAt)) {
        return format(createdAt, 'HH:mm');
    } else {
        return format(createdAt, 'dd.MM.yyyy');
    }
};

// TASK перекинуть в отдельную утилиту так как мы юзаем не только тут главный грех дублирование кода
const getNextMessage = (array: any, value: any) => {
    const index = array.indexOf(value);
    const next = array[index + 1]; // след сообщение 
    const prev = array[index - 1]; // предыдущение сообщение
    return prev;
};

const RightMessage = ({ message, arrayMessage, currentDialogId }: any) => {
    const dispatch = useAppDispatch();

    if (!message) {
        return null;
    };

    const prevMessage = getNextMessage(arrayMessage, message);
    const dateMessage = getMessageTime(new Date(message.createdAt));


    const deleteMessage = async () => {
        if (arrayMessage.length <= 1) {
            //@ts-ignore
            const res = await dispatch(removeMessage(message._id));
            console.log(res);

            //@ts-ignore
            await dispatch(removeDialog(currentDialogId));
        } else {
            //@ts-ignore
            await dispatch(removeMessage(message._id)); // TASK условие будет если у нас в массиве одно сообщение то мы удаляем полностью диалог
        };
    };

    if (prevMessage && message.user._id === prevMessage.user._id) {
        return <div className="w-full flex justify-end mt-3">
            <div className="w-1/2 ">
                <div className="mt-3 flex items-end justify-between w-full bg-blue-400 p-4 rounded-b-xl rounded-tl-xl">
                    <p className=" text-sm text-white w-full">
                        {message.text}
                    </p>
                    <IconRead isReaded={message.read} color="white" />
                </div>
            </div>
        </div>
    };

    return (
        <div className="w-full flex justify-end mt-3">
            <div className="w-1/2 ">
                <NavLink to={`/profile/${message.user._id}`} className="flex items-center justify-end">
                    <p className="font-semibold mr-3 text-sm text-slate-600">Me <span
                        className="text-slate-400 text-xs">{dateMessage}</span></p>
                    <Avatar avatar={message.user.avatar} size={8} />
                </NavLink>

                <div className="mt-3 flex items-end justify-between w-full bg-blue-400 p-4 rounded-b-xl rounded-tl-xl">
                    <p className=" text-sm text-white w-full">
                        {message.text}
                    </p>
                    <IconRead isReaded={message.read} color="white" />
                </div>
            </div>
        </div>
        // <div className="flex justify-end mb-2 items-end">
        //     <div className="bg-blue-100 rounded-t-xl rounded-bl-xl mr-2 py-2 px-3 break-all max-w-lg ">
        //         <ContextMenu.Root>
        //             <ContextMenu.Trigger>
        //                 <p className="text-sm mt-1">
        //                     {message.text}
        //                 </p>
        //                 <p className="text-right text-xs text-gray-400">
        //                     {dateMessage}
        //                 </p>
        //             </ContextMenu.Trigger>
        //             <ContextMenuContent deleteMessage={deleteMessage} />
        //         </ContextMenu.Root>
        //     </div>
        //     <Avatar avatar={message.user.avatar} size={10} />
        // </div>
    );
};

export default RightMessage;