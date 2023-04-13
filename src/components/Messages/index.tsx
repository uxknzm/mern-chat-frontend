import _, { find } from 'lodash';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'

import socket from '../../core/socet';
import { getCurrentDialog, getCurrentDialogId, items } from '../../redux/slices/dialogsSlice';
import { addMessage, fetchMessages, getMessages } from '../../redux/slices/messagesSlice';
import { useAppDispatch } from '../../redux/store';

import LeftMessage from './LeftMessage';
import MessageTyping from './LeftMessage/MessageTyping';
import RightMessage from './RightMessage';
import { isToday } from 'date-fns';
import format from 'date-fns/format';


const Messages = ({ userId, username }: any) => {
    const [previewImage, setPreviewImage] = useState(null);
    const [blockHeight, setBlockHeight] = useState(135);
    const [isTyping, setIsTyping] = useState(false);

    const currentDialogId = useSelector(getCurrentDialogId);
    const dispatch = useAppDispatch();
    const messages = useSelector(getMessages);
    const currentDialog = useSelector(getCurrentDialog);

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

    const groups = messages && messages.reduce((groups: any, message: any) => {
        const date = isToday(new Date(message.createdAt)) ? "Today" : message.createdAt.split('T')[0];
        if (!groups[date]) {
            groups[date] = [];
        };
        groups[date].push(message);
        return groups;
    }, {});
    
    return (
        <div className="h-full px-10 py-4 overflow-auto">
            {_.map(groups, (messages, date) => {
                return <>
                    <div key={date} className="text-center  my-5">
                        <hr className="-mb-3" />
                        <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">{date}</span>
                    </div>
                    {messages.map((message: any) => {
                        if (message.user._id === userId) {
                            return <RightMessage key={message._id} message={message} arrayMessage={messages} currentDialogId={currentDialogId} />
                        } else {
                            return <LeftMessage key={message._id} message={message} arrayMessage={messages} />
                        };
                    })}
                </>
            })}
            {isTyping && <MessageTyping />}
            <div ref={divUnderMessages} />
            {/* <div className="text-center  my-5">
                <hr className="-mb-3" />
                <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Today, 2:15 AM
                    5</span>
            </div>
            <div className="w-full flex flex-start">
                <div className="w-1/2">
                    <div className="flex items-center">
                        <img className="h-5 w-5 overflow-hidden rounded-full"
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                            alt="" />
                        <p className="font-semibold ml-3 text-sm text-slate-600">Mircel Jones <span
                            className="text-slate-400 text-xs">3:21 PM</span></p>
                    </div>

                    <div className="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                        <p className=" text-sm text-slate-500">
                            ok, Thanks
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Messages;