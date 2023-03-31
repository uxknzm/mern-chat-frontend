import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Dialogs from '../components/Dialogs';
import InputMessage from '../components/InputMessage';
import Messages from '../components/Messages';
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
        selectedUserId && dispatch(setCurrentDialogId(selectedUserId));
    }, [selectedUserId]);


    return (
        <>
            <Dialogs setSelectedUserId={setSelectedUserId} userId={userId} isSelected={isSelected} />
            <div className="w-full h-full flex flex-col">
                {/* <DialogHeader interlocutor={interlocutor} onlinePeoples={onlinePeoples} /> */}
                {selectedUserId ? <Messages userId={userId} username={fullname} /> : <MessagesEmpty />}
                {selectedUserId && <InputMessage />}
            </div>
        </>
    );
};

export default MessagesPage;