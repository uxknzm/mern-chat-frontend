import React from 'react';
import { AiOutlineMessage, AiOutlineProfile, AiOutlineUserAdd } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const sidebarItems = [{
        id: 0,
        link: "/profile",
        icon: <AiOutlineProfile size={20} />,
        text: "Profile"
    }, {
        id: 1,
        link: "/dialogs",
        icon: <AiOutlineMessage size={20} />,
        text: "Messages"
    }, {
        id: 2,
        link: "/",
        icon: <AiOutlineUserAdd size={20} />,
        text: "Uses"
    }];

    return (
        <div className="h-full w-64 border-r pt-10 px-5">
            <p className="text-xs font-medium text-gray-400 mt-8">APPLICATIONS</p>
            {sidebarItems.map((item: any) => {
                return <NavLink key={item.id} to={item.link} className={({ isActive }) => isActive ? "mt-4 py-1.5 text-sm font-medium  text-blue-500 group cursor-pointer flex items-center" : "mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center"}>
                    <div className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500">
                        {item.icon}
                    </div>
                    {item.text}
                </NavLink>
            })}
        </div>
    );
};

export default Sidebar;