import React from 'react';

const MessageNotAvatarL = ({ text, date, fullname }: any) => {    
    return (
        <div className="flex mb-2 items-end">
            <div className="rounded ml-2 py-2 px-3 rounded-3xl break-all max-w-lg" style={{ backgroundColor: "#F2F2F2" }}>
                <p className="text-sm mt-1">
                    {text}
                </p>
                <p className="text-right ml-32 text-xs text-gray-400">
                    {date}
                </p>
            </div>
        </div>
    );
};

export default MessageNotAvatarL;