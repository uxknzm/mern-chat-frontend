import React from 'react';
import * as ContextMenu from "@radix-ui/react-context-menu";
import { MdContentCopy, MdDone, MdOutlineForwardToInbox, MdEditNote, MdOutlineDeleteOutline } from "react-icons/md";


const ContextMenuContent = ({ deleteMessage }: any) => {    
    const menuContents = [{
        id: 0,
        text: "Copy",
        icon: <MdContentCopy className="mr-2" />,
    }, {
        id: 1,
        text: "Select",
        icon: <MdDone className="mr-2" />,
    }, {
        id: 2,
        text: "Share",
        icon: <MdOutlineForwardToInbox className="mr-2" />,
    }, {
        id: 3,
        text: "Edit",
        icon: <MdEditNote className="mr-2" />,
    }, {
        id: 4,
        text: "Delete",
        icon: <MdOutlineDeleteOutline className="mr-2" />,
        func: deleteMessage        
    }]
    return (
        <ContextMenu.Content
            className="z-40 w-56 min-w-max py-1 rounded-md shadow-sm outline-none bg-white border border-gray-200 dark:bg-neutral-800 dark:border-gray-700"
        >
            {menuContents.map((item) => {
                return <ContextMenu.Item
                    key={item.id}
                    onClick={item?.func}
                    className="flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700"
                >
                    {item.icon}
                    <span className="flex-1 mr-2">{item.text}</span>
                </ContextMenu.Item>
            })}
        </ContextMenu.Content>
    );
};

export default ContextMenuContent;