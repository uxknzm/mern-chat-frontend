import { orderBy } from 'lodash';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import socket from '../../core/socet';
import { fetchDialogs, getCurrentDialogId, items, setCurrentDialogId, setSelectedPartherId, updateReadedStatus } from '../../redux/slices/dialogsSlice';
import { useAppDispatch } from '../../redux/store';
import Input from '../input';
import DialogsEmty from './DialogsEmpty';
import DialogsList from './DialogsList';
import { aboutMe } from '../../redux/slices/profileSlice';

const Dialogs = () => {
    // selectors
    const currentDialogId = useSelector(getCurrentDialogId);
    const { id: userId }: any = useSelector(aboutMe);

    // dispatch
    const dispatch = useAppDispatch();

    // locale state
    const [inputValue, setValue] = useState('');
    const dialogs = useSelector(items);
    const [filtred, setFiltredItems] = useState(Array.from(dialogs));

    // methods
    const onSelectPartherId = (id: string) => {
        dispatch(setSelectedPartherId(id));
    };
    const onSelectDialog = (id: string) => {
        dispatch(setCurrentDialogId(id));
    };

    const isSelectedDialog = (id: string) => {
        return currentDialogId === id;
    };

    const getDialogs = () => {
        dispatch(fetchDialogs());
    };

    const onChangeInput = (value = '') => {
        setFiltredItems(
            dialogs.filter(
                (dialog: any) =>
                    dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                    dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0,
            ),
        );
        setValue(value);
    };

    useEffect(() => {
        setFiltredItems(Array.from(dialogs));
        if (dialogs.length) {
            onChangeInput();
        }
    }, [dialogs]);

    useEffect(() => {
        getDialogs();

        socket.on('SERVER:DIALOG_CREATED', getDialogs);
        socket.on('SERVER:NEW_MESSAGE', getDialogs);
        socket.on('SERVER:MESSAGES_READED', updateReadedStatus);
        return () => {
            socket.removeListener('SERVER:DIALOG_CREATED', getDialogs);
            socket.removeListener('SERVER:NEW_MESSAGE', getDialogs);
        };
    }, []);

    // if (status === "loading") {
    //     return (
    //         <div className="spinner-container">
    //             <div className="loading-spinner" />
    //         </div>
    //     );
    // };

    return (
        <div className="h-full w-[42rem] flex flex-col overflow-y-auto border-r">
            <Input value={inputValue} onChange={(e: any) => onChangeInput(e.target.value)} />
            {filtred.length ? orderBy(filtred, ["updatedAt"], ["desc"]).map((user: any) => <DialogsList key={user._id} userId={userId} isSelectedDialog={isSelectedDialog} onSelectPartherId={onSelectPartherId} onSelectDialog={onSelectDialog} {...user} />) : <DialogsEmty />}
        </div>
    );
};

export default Dialogs;