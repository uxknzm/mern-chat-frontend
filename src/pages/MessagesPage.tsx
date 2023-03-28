import axios from '../core/axios';
import { uniqBy } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Dialogs from '../components/Dialogs';
import InputMessage from '../components/InputMessage';
import Messages from '../components/Messages';
import DialogHeader from '../components/DialogHeader';
import { fetchPeoples, peoplesNotMe, setOfflinePeople, setOnlinePeople, peoples } from '../redux/slices/peoplesSliece';
import { aboutMe } from '../redux/slices/profileSlice';
import { useAppDispatch } from '../redux/store';
import MessagesEmpty from '../components/Messages/MessageEmpty';
import { setCurrentDialogId } from '../redux/slices/dialogsSlice';

const MessagesPage = () => {

    const { id: userId, fullname }: any = useSelector(aboutMe);
    
    const [selectedUserId, setSelectedUserId] = useState(null);

    const dispatch = useAppDispatch();

    const isSelected = (id: any) => {
        return selectedUserId === id;
    };
    useEffect(() => {
        dispatch(setCurrentDialogId(selectedUserId));
      }, [selectedUserId]);

    // useEffect(() => {
    //     const div = divUnderMessages.current;
    //     if (div) {
    //         // @ts-ignore
    //         div.scrollIntoView();
    //     };
    //     axios.get(`/messages`, config).then((res) => {
    //         const { data } = res;
    //         setAllMessages(data);
    //     });
    // }, []);



    return (
        <>
            <Dialogs setSelectedUserId={setSelectedUserId}  userId={userId} isSelected={isSelected} />
            <div className="w-full h-full flex flex-col">
                {/* <DialogHeader interlocutor={interlocutor} onlinePeoples={onlinePeoples} /> */}
                {selectedUserId ? <Messages userId={userId} username={fullname} selectedUserId={selectedUserId} /> : <MessagesEmpty />}
                {/* {selectedUserId && <InputMessage sendMessage={sendMessage} newMessageText={newMessageText} setNewMessageText={setNewMessageText} />} */}
            </div>
        </>
    );
};

export default MessagesPage;