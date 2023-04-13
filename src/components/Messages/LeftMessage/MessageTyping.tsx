import React from 'react';

const MessageTyping = () => {
    return (
        <div className="w-full flex flex-start overflow-y-auto">
            <div className="w-1/2">
                <div className="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                    <p className=" text-sm text-slate-500">
                        Is typing...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MessageTyping;