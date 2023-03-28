import { orderBy } from 'lodash';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import socket from '../../core/socet';
import { fetchDialogs, items, updateReadedStatus } from '../../redux/slices/dialogsSlice';
import { aboutMe } from '../../redux/slices/profileSlice';
import { useAppDispatch } from '../../redux/store';
import createDialog from '../../utils/createDialog';
import Input from '../input';
import DialogsEmty from './DialogsEmpty';
import DialogsList from './DialogsList';

const Dialogs = ({ setSelectedUserId, isSelected, userId }: any) => {
    const [inputValue, setValue] = useState('');
    const dialogs = useSelector(items);
    const [filtred, setFiltredItems] = useState(Array.from(dialogs));
    const dispatch = useAppDispatch();

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
    // @ts-ignore
    window.fetchDialogs = fetchDialogs;

    useEffect(() => {
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

    return (
        <div className="h-full w-[42rem] bg-slate-50 border-r flex flex-col overflow-y-auto">
            <div className="h-full">
                <Input value={inputValue} onChange={(e: any) => onChangeInput(e.target.value)} />
                {filtred.length ? orderBy(filtred, ["created_at"], ["desc"]).map((user: any) => <DialogsList key={user.id} userId={userId} isSelected={isSelected} setSelectedUserId={setSelectedUserId} {...user} />) : <DialogsEmty />}
            </div>
        </div>
    );
};

export default Dialogs;