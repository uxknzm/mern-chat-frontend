import { orderBy } from 'lodash';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import socket from '../../core/socet';
import { fetchDialogs, getCurrentDialogId, items, setCurrentDialogId, setSelectedPartherId, updateReadedStatusDialog } from '../../redux/slices/dialogsSlice';
import { useAppDispatch } from '../../redux/store';
import Input from '../input';
import DialogsEmty from './DialogsEmpty';
import DialogsList from './DialogsList';
import { aboutMe } from '../../redux/slices/profileSlice';
import { updateReadedStatusMessage } from '../../redux/slices/messagesSlice';
import Resizable from 'react-resizable-layout';
import SampleSplitter from './SampleSplitter';
import classNames from 'classnames';
import CropDialogList from './CropDialogList';
import { TfiSearch } from "react-icons/tfi";

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
    const [position, setPosition] = useState(361);
    const [visibleSearchInput, setVisibleSearchInput] = useState(false);

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

    const onUpdateReadedStatus = (data: any) => {
        dispatch(updateReadedStatusDialog(data.dialogId));
        dispatch(updateReadedStatusMessage(data.dialogId));
    }

    useEffect(() => {
        setFiltredItems(Array.from(dialogs));
        if (dialogs.length) {
            onChangeInput();
        };
    }, [dialogs]);

    useEffect(() => {
        getDialogs();

        socket.on('SERVER:DIALOG_CREATED', getDialogs);
        socket.on('SERVER:NEW_MESSAGE', getDialogs);
        socket.on('SERVER:MESSAGES_READED', onUpdateReadedStatus);
        return () => {
            socket.removeListener('SERVER:DIALOG_CREATED', getDialogs);
            socket.removeListener('SERVER:NEW_MESSAGE', getDialogs);
        };
    }, []);

    if (position <= 360) {
        return (
            <Resizable max={2500} min={150} initial={400} axis={'x'}>
                {({ position, separatorProps }) => {
                    setPosition(position);
                    return (
                        <>
                            <div className="h-full flex flex-col overflow-y-auto border-r items-center pt-5 overflow-hidden">
                                {!visibleSearchInput ? <TfiSearch onClick={() => {
                                    setVisibleSearchInput(true)
                                }} className="cursor-pointer" size={22} color='gray' /> : <Input value={inputValue} onChangeInput={onChangeInput} setVisibleSearchInput={setVisibleSearchInput} />}
                                {orderBy(filtred, ["updatedAt"], ["desc"]).map((user: any) => <CropDialogList key={user._id} userId={userId} isSelectedDialog={isSelectedDialog} onSelectPartherId={onSelectPartherId} onSelectDialog={onSelectDialog} {...user} />)}
                            </div>
                            <SampleSplitter {...separatorProps} />
                        </>
                    )
                }}
            </Resizable>
        );
    };

    return (
        <Resizable max={2500} min={150} initial={400} axis={'x'}>
            {({ position, separatorProps, isDragging }) => {
                setPosition(position);
                return (
                    <>
                        <div className="h-full flex flex-col overflow-y-auto border-r"
                            style={{ width: position }}>
                            <Input value={inputValue} onChangeInput={onChangeInput} />
                            {filtred.length ? orderBy(filtred, ["updatedAt"], ["desc"]).map((user: any) => <DialogsList key={user._id} userId={userId} isSelectedDialog={isSelectedDialog} onSelectPartherId={onSelectPartherId} onSelectDialog={onSelectDialog} {...user} />) : <DialogsEmty />}
                        </div>
                        <SampleSplitter {...separatorProps} />
                    </>
                )
            }}
        </Resizable>
    );
};

export default Dialogs;