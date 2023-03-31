import { Box, Button, Input, Modal } from '@mui/material';
import axios from '../../../core/axios';
import { isToday } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import format from 'date-fns/format';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCurrentDialogId } from '../../../redux/slices/dialogsSlice';
import { useAppDispatch } from '../../../redux/store';
import ModalContent from '../ModalContent';

const getMessageTime = (createdAt: any) => {
    if (isToday(createdAt)) {
        return format(createdAt, 'HH:mm');
    } else {
        return format(createdAt, 'DD.MM.YYYY');
    }
};


const UserItem = ({ fullname, last_seen, isOnline, id, myId }: any) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [newMessage, setNewMessage] = useState("");

    const onShow = () => {
        setVisibleModal(true);
    };

    const onClose = () => {
        setVisibleModal(false);
    };


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const openDialog = () => {
        onShow();
    };
    const modalOk = () => {
        axios.post("/dialogs", { partner: id, text: newMessage }).then((res) => {
            onClose();
            navigate("/dialogs");
            dispatch(setCurrentDialogId(id));
        });
    };
    // const lastSeen = getMessageTime(parseISO(last_seen), 1);
    return (
        <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                <div className="flex items-center flex-1 min-w-0">
                    {/* <img
                        src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill" className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" /> */}
                    <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p className="text-lg font-bold text-gray-800 truncate">{fullname}</p>
                        <p className="text-gray-600 text-md">{last_seen}</p>
                    </div>
                </div>
                <Modal
                    open={visibleModal}
                    onClose={onClose}
                >
                    <ModalContent
                        modalOk={modalOk}
                        setNewMessage={setNewMessage}
                        newMessage={newMessage}
                    />
                </Modal>
                {myId !== id && <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                    <button className="bg-blue-400 rounded-full px-5 py-3 text-white hover:bg-blue-500 w-52">Add contact</button>
                    <button onClick={openDialog} className="bg-blue-400 rounded-full px-5 py-3 text-white hover:bg-blue-500 w-52">Message</button>
                </div>}
            </div>
        </div>
    );
};

export default UserItem;