import { Badge } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowFullItem = ({ sidebarItemsTop, siderbarItemsBottom }: any) => {
    return (
        <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                {sidebarItemsTop.map((item: any) => {
                    return <NavLink className={({ isActive }) => classNames("flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-200", { "bg-gray-200": isActive })} to={item.link}>
                        <Badge dot={item.dot} color={"rgb(99 102 241)"}>
                            {item.icon}
                        </Badge>
                        <span className="ml-2 text-sm font-medium">
                            {item.text}
                        </span>
                    </NavLink>
                })}
            </div>
            <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
                {siderbarItemsBottom.map((item: any) => {
                    return <NavLink className={({ isActive }) => classNames("flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-200", { "bg-gray-200": isActive })} to={item.link}>
                        {item.icon}
                        <span className="ml-2 text-sm font-medium">{item.text}</span>
                    </NavLink>
                })}
            </div>
        </div>
    );
};

export default ShowFullItem;