import { find } from 'lodash';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import socket from '../../core/socet';
import { getCurrentDialogId, items } from '../../redux/slices/dialogsSlice';
import { fetchMessages, getMessages } from '../../redux/slices/messagesSlice';
import { useAppDispatch } from '../../redux/store';

import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';

const Messages = ({ messagesWithoutDupes, userId, interlocutor, username }: any) => {

    const [previewImage, setPreviewImage] = useState(null);
    const [blockHeight, setBlockHeight] = useState(135);
    const [isTyping, setIsTyping] = useState(false);
    const dialogs = useSelector(items);
    const currentDialogId = useSelector(getCurrentDialogId);
    const dispatch = useAppDispatch();
    const messages = useSelector(getMessages);
    const currentDialog = find(dialogs, { _id: currentDialogId });

    let typingTimeoutId: any = null;

    const divUnderMessages = useRef(null);

    // const onNewMessage = (data: any) => {
    //     dispatch(addMessage(data));
    // };

    const toggleIsTyping = () => {
        setIsTyping(true);
        clearInterval(typingTimeoutId);
        typingTimeoutId = setTimeout(() => {
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
    // useEffect(() => {
    //     if (currentDialog) {
    //         //@ts-ignore
    //         dispatch(fetchMessages(currentDialog._id));
    //     }

    //     socket.on('SERVER:NEW_MESSAGE', onNewMessage);

    //     return () => socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
    // }, [currentDialog]);

    useEffect(() => {
        //@ts-ignore
        divUnderMessages.current.scrollTo(0, 999999);
    }, [messages, isTyping]);

    return (
        <div className="h-full px-10 py-4 overflow-y-auto">
            {messages.map((message: any) => message.sender === userId ? <RightMessage username={username} userId={userId} message={message} /> : <LeftMessage interlocutor={interlocutor} message={message} />)}
            <div ref={divUnderMessages} />
        </div>
    );
};

export default Messages;