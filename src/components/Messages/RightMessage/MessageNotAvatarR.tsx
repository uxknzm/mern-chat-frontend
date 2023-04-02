import * as ContextMenu from "@radix-ui/react-context-menu";
import React from 'react';
import AvatarMessage from '../../AvatarMessage/AvatarMessage';
import ContextMenuContent from "../../ContextMenuContent";

const MessageNotAvatarR = ({ text, date }: any) => {
    return (
        <div className="flex justify-end mb-2 items-end">
            <div className="bg-blue-100 rounded-3xl mr-2 py-2 px-3 break-all max-w-lg">
                <ContextMenu.Root>
                    <ContextMenu.Trigger>
                        <p className="text-sm mt-1">
                            {text}
                        </p>
                        <p className="text-right text-xs text-gray-400">
                            {date}
                        </p>
                    </ContextMenu.Trigger>
                    <ContextMenuContent />
                </ContextMenu.Root>
            </div>
            <AvatarMessage />
        </div>
    );
};

export default MessageNotAvatarR;