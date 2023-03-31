import { find } from 'lodash';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import socket from '../../core/socet';
import { getCurrentDialogId, items } from '../../redux/slices/dialogsSlice';
import { addMessage, fetchMessages, getMessages } from '../../redux/slices/messagesSlice';
import { useAppDispatch } from '../../redux/store';

import LeftMessage from './LeftMessage';
import MessagesEmpty from './MessageEmpty';
import RightMessage from './RightMessage';

const Messages = ({ userId, username }: any) => {

    const [previewImage, setPreviewImage] = useState(null);
    const [blockHeight, setBlockHeight] = useState(135);
    const [isTyping, setIsTyping] = useState(false);

    const dialogs = useSelector(items);
    const currentDialogId = useSelector(getCurrentDialogId);
    const dispatch = useAppDispatch();
    const messages = useSelector(getMessages);
    const currentDialog = find(dialogs, { _id: currentDialogId });
    console.log(messages);


    const typingTimeoutId: any = useRef();

    const divUnderMessages = useRef(null);

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

    // useEffect(() => {
    //     if (attachments.length) {
    //         setBlockHeight(245);
    //     } else {
    //         setBlockHeight(135);
    //     }
    // }, [attachments]);
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

    return (
        <div className="h-full px-10 py-4 overflow-y-auto">
            {messages.map((message: any) => message.user._id === userId ? <RightMessage key={message._id} username={username} userId={userId} message={message} /> : <LeftMessage key={message._id} message={message} />)}
            <div ref={divUnderMessages} />
        </div>
    );
};

export default Messages;