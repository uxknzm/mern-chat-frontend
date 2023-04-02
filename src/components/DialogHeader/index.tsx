import React from 'react';
import { useSelector } from 'react-redux';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { getCurrentDialog } from '../../redux/slices/dialogsSlice';
import AvatarDialog from '../AvatarDialog/AvatarDialog';

const DialogHeader = () => {
    const currentDialog = useSelector(getCurrentDialog);


    if (!currentDialog) {
        return null;
    };
    const { partner }: any = currentDialog;

    // const isOnline = onlinePeoples[interlocutor._id] ? true : false;

    return (
        <div className="h-16 border flex justify-between items-center w-full px-5 py-2 shadow-sm">
            <div className="flex items-center">
                <AvatarDialog username={partner.fullname} userId={partner._id} online={partner.isOnline} />
                <p className="font-semibold ml-3 text-slate-600">{partner.fullname}</p>
            </div>
            <div className="flex items-center space-x-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-9 bg-slate-50 rounded-full stroke-slate-400 p-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content
                            className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                            sideOffset={5}
                        >
                            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                                Delete dialog
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
        </div>
    );
};

export default DialogHeader;