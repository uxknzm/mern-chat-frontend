import React from 'react';

const ButtonsProfile = ({ isMe }: any) => {
    return (
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            {!isMe && <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-gray-100 px-4 py-2 rounded-md text-sm space-x-2 transition duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                    <span>Add friends</span>
                </button>
                <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-gray-100 px-4 py-2 rounded-md text-sm space-x-2 transition duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Message</span>
                </button>
            </div>}
        </div>
    );
};

export default ButtonsProfile;