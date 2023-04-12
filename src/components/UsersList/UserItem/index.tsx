import axios from '../../../core/axios';
import { isToday, format } from 'date-fns';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { setCurrentDialogId } from '../../../redux/slices/dialogsSlice';
import { useAppDispatch } from '../../../redux/store';
import ModalContent from '../ModalContent';
import Avatar from '../../Avatar/Avatar';

const getMessageTime = (createdAt: any) => {
    if (isToday(createdAt)) {
        return format(createdAt, 'HH:mm');
    } else {
        return format(createdAt, 'DD.MM.YYYY');
    }
};


const UserItem = ({ fullname, last_seen, isOnline, id, myId, avatar }: any) => {

    const [visibleModal, setVisibleModal] = useState(false);
    const [newMessage, setNewMessage] = useState("123");

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
    const lastSeen = new Date(last_seen).toLocaleString();
    if (myId === id) {
        return null;
    };
    return (
        <div
            className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16">
                <Avatar avatar={avatar} size={32} />
            </div>
            <div className="text-center mt-2">
                <NavLink to={`/profile/${id}`}><h2 className="font-semibold">{fullname}</h2></NavLink>
                <p className="text-gray-500">{lastSeen}</p>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                <li className="flex flex-col items-center justify-around">
                    <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <div>2k</div>
                </li>
                <li className="flex flex-col items-center justify-between">
                    <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                    </svg>
                    <div>10k</div>
                </li>
                <li className="flex flex-col items-center justify-around">
                    <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <div>15</div>
                </li>
            </ul>
            <div className="p-4 border-t mx-8 mt-2 flex gap-2">
                <button className="w-1/2 block mx-auto rounded-full bg-blue-500 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
                <button onClick={modalOk} className="w-1/2 block mx-auto rounded-full bg-blue-500 hover:shadow-lg font-semibold text-white px-6 py-2">Message</button>
            </div>
            {/* <Modal
                open={visibleModal}
                onClose={onClose}
            >
                <ModalContent
                    modalOk={modalOk}
                    setNewMessage={setNewMessage}
                    newMessage={newMessage}
                />
            </Modal> */}
        </div>
    );
};

export default UserItem;