import classNames from 'classnames';
import React, { useState } from 'react';

import Home from '../../Icons/Home';
import Logo from '../../Icons/Logo';
import Messages from '../../Icons/Messages';
import Search from '../../Icons/Search';
import Settings from '../../Icons/Settings';
import { exit } from '../../redux/slices/profileSlice';
import { useAppDispatch } from '../../redux/store';
import CropItem from './CropItem';
import ShowFullItem from './ShowFullItem';

const Sidebar = ({ fullname, id }: any) => {
    const [showFullItem, setShowFullItem] = useState(false);
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
        text: "Messages"
    }];
    const siderbarItemsBottom = [{
        id: 3,
        link: "/",
        icon: <Settings />,
        text: "Settings"
    }];

    return (
        <div className={classNames('flex flex-col items-center h-full overflow-hidden text-gray-700 bg-gray-50 rounded cursor-pointer transition-all duration-300 ease-in-out', { "w-64": showFullItem, "w-16": !showFullItem })}>
            <div onClick={() => setShowFullItem(!showFullItem)} className="flex items-center w-full px-3 mt-3">
                <Logo />
                <span className={classNames('ml-2 text-sm font-bold', { "hidden": !showFullItem })}>The App</span>
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
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={classNames('ml-2 text-sm font-medium', { "hidden": !showFullItem })}>{fullname}</span>
            </div>
        </div>
    );
};

export default Sidebar;