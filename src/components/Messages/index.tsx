import _, { find } from 'lodash';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'

import socket from '../../core/socet';
import { getCurrentDialog, getCurrentDialogId } from '../../redux/slices/dialogsSlice';
import { addMessage, fetchMessages, getMessages } from '../../redux/slices/messagesSlice';
import { useAppDispatch } from '../../redux/store';

import LeftMessage from './LeftMessage';
import MessageTyping from './LeftMessage/MessageTyping';
import RightMessage from './RightMessage';
import { isToday } from 'date-fns';
import MessagesEmpty from './MessageEmpty';
import { aboutMe } from '../../redux/slices/profileSlice';
import { MenuProps } from 'antd';

const groupMessages = (messages: any) => {
    const groups = messages && messages.reduce((groups: any, message: any) => {
        const date = isToday(new Date(message.createdAt)) ? "Today" : message.createdAt.split('T')[0];
        if (!groups[date]) {
            groups[date] = [];
        };
        groups[date].push(message);
        return groups;
    }, {});
    return groups;
};

const items: MenuProps['items'] = [
    {
        label: '1st menu item',
        key: '1',
    },
    {
        label: '2nd menu item',
        key: '2',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

const Messages = () => {
    // selectors
    const currentDialogId = useSelector(getCurrentDialogId);
    const messages = useSelector(getMessages);
    const currentDialog = useSelector(getCurrentDialog);
    const { id: userId }: any = useSelector(aboutMe);

    // dispatch
    const dispatch = useAppDispatch();

    // locale state
    const [previewImage, setPreviewImage] = useState(null);
    const [blockHeight, setBlockHeight] = useState(135);
    const [isTyping, setIsTyping] = useState(false);
    /* TODO скорее нужно будет вынести в редусеры) */
    const groups = groupMessages(messages);

    // refs
    const typingTimeoutId: any = useRef();
    const divUnderMessages = useRef(null);

    // methods
    const onNewMessage = (data: any) => {
        currentDialogId && dispatch(addMessage({ data, currentDialogId }));
    };

    const toggleIsTyping = () => {
        setIsTyping(true);
        clearInterval(typingTimeoutId.current);
        typingTimeoutId.current = setTimeout(() => {
            setIsTyping(false);
        }, 3000);
    };

    useEffect(() => {
        socket.on('DIALOGS:TYPING', toggleIsTyping);
    }, []);

    //@ts-ignore
    useEffect(() => {
        //@ts-ignore
        if (currentDialog) {
            //@ts-ignore
            dispatch(fetchMessages(currentDialog._id));
        };
        socket.on('SERVER:NEW_MESSAGE', onNewMessage);

        return () => socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
    }, [currentDialog]);

    useEffect(() => {
        if (divUnderMessages.current) {
            //@ts-ignore
            divUnderMessages.current.scrollIntoView();
        }
    }, [messages]);

    if (!currentDialog) {
        return <MessagesEmpty />;
    };

    return (
        <div className="h-full px-10 py-4 overflow-auto">
            {_.map(groups, (messages, date) => {
                return <>
                    <div key={date} className="text-center my-5">
                        <hr className="-mb-3" />
                        <span className="text-xs text-slate-300 font-medium bg-zinc-800 px-3 -mt-3">{date}</span>
                    </div>
                    {messages.map((message: any) => {
                        if (message.user._id === userId) {
                            return <RightMessage key={message._id} message={message} arrayMessage={messages} currentDialogId={currentDialogId} items={items} />
                        } else {
                            return <LeftMessage key={message._id} message={message} arrayMessage={messages} />
                        };
                    })}
                </>
            })}
            {isTyping && <MessageTyping />}
            <div ref={divUnderMessages} />
        </div>
    );
};

export default Messages;