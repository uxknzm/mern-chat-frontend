import { isToday, format } from 'date-fns';
import React from 'react';
import { useAppDispatch } from '../../../redux/store';
import { removeMessage } from '../../../redux/slices/messagesSlice';
import { removeDialog } from '../../../redux/slices/dialogsSlice';
import Avatar from '../../Avatar/Avatar';
import IconRead from '../../IconRead';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'antd';

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

const RightMessage = ({ message, arrayMessage, currentDialogId, items }: any) => {
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
                <Dropdown menu={{ items }} trigger={['contextMenu']}>
                    <div className="mt-3 flex items-end justify-between w-full bg-zinc-600 p-4 rounded-b-xl rounded-tl-xl">
                        <p className=" text-sm text-white w-full">
                            {message.text}
                        </p>
                        <IconRead isReaded={message.read} color="white" />
                    </div>
                </Dropdown>
            </div>
        </div>
    };

    return (
        <div className="w-full flex justify-end mt-3">
            <div className="w-1/2 ">
                <NavLink to={`/profile/${message.user._id}`} className="flex items-center justify-end">
                    <p className="font-semibold mr-3 text-sm text-gray-300">Me <span
                        className="text-slate-400 text-xs">{dateMessage}</span></p>
                    <Avatar avatar={message.user.avatar} size={25} />
                </NavLink>
                <Dropdown menu={{ items }} trigger={['contextMenu']}>
                    <div className="mt-3 flex items-end justify-between w-full bg-zinc-600 p-4 rounded-b-xl rounded-tl-xl">
                        <p className=" text-sm text-white w-full">
                            {message.text}
                        </p>
                        <IconRead isReaded={message.read} color="white" />
                    </div>
                </Dropdown>
            </div>
        </div>
    );
};

export default RightMessage;