import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Dialogs from '../components/Dialogs';
import InputMessage from '../components/InputMessage';
import Messages from '../components/Messages';
import { aboutMe } from '../redux/slices/profileSlice';
import { useAppDispatch } from '../redux/store';
import MessagesEmpty from '../components/Messages/MessageEmpty';
import { setCurrentDialogId } from '../redux/slices/dialogsSlice';
import DialogHeader from '../components/DialogHeader';

const MessagesPage = () => {

    const { id: userId, fullname }: any = useSelector(aboutMe);

    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectDialog, setSelectDialog] = useState(null);
    

    const dispatch = useAppDispatch();

    const isSelected = (id: any) => {
        return selectDialog === id;
    };
    useEffect(() => {
        selectDialog && dispatch(setCurrentDialogId(selectDialog));
    }, [selectDialog]);

    

    return (
        <div className='w-full h-full flex'>
            <Dialogs setSelectDialog={setSelectDialog} setSelectedUserId={setSelectedUserId} userId={userId} isSelected={isSelected} />
            <div className="w-full h-full flex flex-col">
                {selectDialog && <DialogHeader userId={userId} />}
                {selectDialog ? <Messages userId={userId} username={fullname} /> : <MessagesEmpty />}
                {selectDialog && <InputMessage selectedUserId={selectedUserId} />}
            </div>
        </div>
    );
};

export default MessagesPage;