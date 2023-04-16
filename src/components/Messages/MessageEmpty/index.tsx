import React from 'react';

const MessagesEmpty = () => {
    return (
        <div className="h-full px-10 py-4 overflow-y-auto">
            <div className="flex h-full flex-grow items-center justify-center">
                <div className="text-gray-300">&larr; Select a person from the sidebar</div>
            </div>
        </div>
    );
};

export default MessagesEmpty;