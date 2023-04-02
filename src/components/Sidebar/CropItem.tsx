import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const CropItem = ({ sidebarItemsTop, siderbarItemsBottom }: any) => {
    return (
        <>
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                {sidebarItemsTop.map((item: any) => {
                    return <NavLink className={({ isActive }) => classNames("flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-200", { "bg-gray-200": isActive })} to={item.link}>
                        {item.icon}
                    </NavLink>
                })}
            </div>
            <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
                {siderbarItemsBottom.map((item: any) => {
                    return <NavLink className={({ isActive }) => classNames("flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-200", { "bg-gray-200": isActive })} to={item.link}>
                        {item.icon}
                    </NavLink>
                })}
            </div>
        </>
    );
};

export default CropItem;