import React, { useState } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
import axios from "../../../core/axios";
import { setCurrentDialogId } from '../../../redux/slices/dialogsSlice';
import { Modal } from 'antd';
import ModalContent from '../ModalContent';

const UserDescription = ({ email, userId, isMe }: any) => {
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

    const modalOk = () => {
        axios.post("/dialogs", { partner: userId, text: newMessage }).then((res) => {
            onClose();
            navigate("/dialogs");
            dispatch(setCurrentDialogId(userId));
        });
    };

    return (
        <div>
            <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                <li>
                    {email}
                </li>
                {!isMe(userId) && <li onClick={onShow} className="text-blue-500 cursor-pointer">
                    Write message
                </li>}
            </ul>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={visibleModal}
                onOk={modalOk}
                onCancel={onClose}
            >
                <ModalContent
                    setNewMessage={setNewMessage}
                    newMessage={newMessage}
                />
            </Modal>
        </div>
    );
};

export default UserDescription;