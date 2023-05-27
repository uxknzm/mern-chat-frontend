import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import Home from '../../Icons/Home';
import { RiMessage2Line } from "react-icons/ri";
import Messages from '../../Icons/Messages';
import Search from '../../Icons/Search';
import Settings from '../../Icons/Settings';
import { exit } from '../../redux/slices/profileSlice';
import { useAppDispatch } from '../../redux/store';
import CropItem from './CropItem';
import ShowFullItem from './ShowFullItem';
import Avatar from '../Avatar/Avatar';
import { getLastMessageisRead } from '../../redux/slices/dialogsSlice';
import { useSelector } from 'react-redux';

const Sidebar = ({ fullname, id, avatar, me }: any) => {
    const [showFullItem, setShowFullItem] = useState(true);
    const isNewMessage = useSelector(getLastMessageisRead);
    const dispatch = useAppDispatch();
    const logout = () => {
        dispatch(exit());
    };

    const sidebarItemsTop = [{
        id: 0,
        link: `/profile/${id}`,
        icon: <Home />,
        text: "Home"
    }, {
        id: 1,
        link: "/users",
        icon: <Search />,
        text: "Search"
    }, {
        id: 2,
        link: "/dialogs",
        icon: <Messages />,
        dot: isNewMessage,
        text: "Messages" 
    }];

    const siderbarItemsBottom = [{
        id: 3,
        link: "/",
        icon: <Settings />,
        text: "Settings"
    }];

    return (
        <div className={classNames('flex flex-col items-center h-full text-gray-700 bg-gray-50 rounded cursor-pointer transition-all duration-300 ease-in-out', { "w-64": showFullItem, "w-16": !showFullItem })}>
            <div onClick={() => setShowFullItem(!showFullItem)} className="flex items-center w-full px-3 mt-3">
                <RiMessage2Line size={32} color='blue' />
                <span className={classNames('ml-2 text-sm font-bold', { "hidden": !showFullItem })}>MESSAGER</span>
            </div>
            {showFullItem ?
                <ShowFullItem sidebarItemsTop={sidebarItemsTop} siderbarItemsBottom={siderbarItemsBottom} /> :
                <CropItem sidebarItemsTop={sidebarItemsTop} siderbarItemsBottom={siderbarItemsBottom} />}
            <div className="flex items-center justify-center rounded pr-4 pl-4 mt-auto bg-gray-200">
                <div className="rounded ml-2">
                    <span>RU</span>
                </div>
                <div className="rounded bg-white pr-4 pl-4 mt-2 mb-2 ml-4">
                    <span>EN</span>
                </div>
            </div>
            <div className="flex items-center justify-center rounded pr-4 pl-4 mt-2 bg-gray-200">
                <div className="rounded ml-2">
                    <span>Dark</span>
                </div>
                <div className="rounded bg-white pr-4 pl-4 mt-2 mb-2 ml-4">
                    <span>Light</span>
                </div>
            </div>
            <div onClick={logout} className="flex items-center justify-center w-full h-16 mt-2 bg-gray-200 hover:bg-gray-200 cursor-pointer">
                <Avatar avatar={avatar} size={25} />
                <span className={classNames('ml-2 text-sm font-medium', { "hidden": !showFullItem })}>{fullname}</span>
            </div>
        </div>
    );
};

export default Sidebar;