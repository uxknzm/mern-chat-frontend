import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import socket from '../../core/socet';
import { getCurrentDialogId } from '../../redux/slices/dialogsSlice';
import { fetchSendMessage } from '../../redux/slices/messagesSlice';
import { aboutMe } from '../../redux/slices/profileSlice';
import { useAppDispatch } from '../../redux/store';
import InputMessage from './InputMessage';

const InputMessageContainer = ({ selectedUserId }: any) => {
    const [value, setValue] = useState("");
    const user: any = useSelector(aboutMe);
    const currentDialogId = useSelector(getCurrentDialogId);
    const dispatch = useAppDispatch();
    const sendMessage = () => {
        
        if (value && currentDialogId) {
            console.log(currentDialogId, "InputMessageContainer");
            
            //@ts-ignore
            dispatch(fetchSendMessage({
                text: value,
                dialogId: currentDialogId,
                parther: selectedUserId
            }));
            setValue('');
        }
    };
    const handleSendMessage = (e: any) => {        
        socket.emit('DIALOGS:TYPING', { dialogId: currentDialogId, user });
        if (e.keyCode === 13) {
            sendMessage();
        };
    };
    return <InputMessage handleSendMessage={handleSendMessage} value={value} setValue={setValue} sendMessage={sendMessage} />;
};

export default InputMessageContainer;