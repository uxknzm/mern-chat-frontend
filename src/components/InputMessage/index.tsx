import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import socket from '../../core/socet';
import { getCurrentDialog, getCurrentDialogId, getSelectedPartherId } from '../../redux/slices/dialogsSlice';
import { fetchSendMessage } from '../../redux/slices/messagesSlice';
import { aboutMe } from '../../redux/slices/profileSlice';
import { useAppDispatch } from '../../redux/store';
import InputMessage from './InputMessage';

const InputMessageContainer = () => {

    // selectors
    const user: any = useSelector(aboutMe);
    const currentDialogId = useSelector(getCurrentDialogId);
    const currentDialog = useSelector(getCurrentDialog);
    const selectedPartherId = useSelector(getSelectedPartherId);

    // dispatch
    const dispatch = useAppDispatch();
    
    // locale state
    const [value, setValue] = useState("");
    
    // methods
    const sendMessage = () => {
        
        if (value && currentDialogId) {            
            //@ts-ignore
            dispatch(fetchSendMessage({
                text: value,
                dialogId: currentDialogId,
                parther: selectedPartherId
            }));
            console.log(user);
            
            socket.emit('message', {
                fullname: user.fullname,
                isOnline: user.isOnline,
                id: user._id,
                avatar: user.avatar,
                text: value
            });
            setValue('');
        }
    };
    const handleSendMessage = (e: any) => {        
        socket.emit('DIALOGS:TYPING', { dialogId: currentDialogId, user });
        if (e.keyCode === 13) {
            sendMessage();
        };
    };

    if (!currentDialog) {
        return null;
    };

    return <InputMessage handleSendMessage={handleSendMessage} value={value} setValue={setValue} sendMessage={sendMessage} />;
};

export default InputMessageContainer;