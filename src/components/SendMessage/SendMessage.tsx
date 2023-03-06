import React from 'react';
import classNames from 'classnames';

const SendMessage = ({ newMessageText, setNewMessageText, sendFile }: any) => {
    return (
        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div>
                <label className="p-2 text-gray-600 cursor-pointer rounded-sm">
                    <input type="file" className="hidden" onChange={sendFile} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z" clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="flex-grow ml-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        value={newMessageText}
                        onChange={(e) => setNewMessageText(e.target.value)}
                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                </div>
            </div>
            <div className="ml-4">
                <button disabled={newMessageText === ""} type="submit" className={classNames({
                    "flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0": newMessageText !== "",
                    "flex items-center justify-center bg-gray-500 rounded-xl text-white px-4 py-1 flex-shrink-0" : newMessageText === ""
                })}>
                    <span>Send</span>
                    <span className="ml-2">
                        <svg
                            className="w-4 h-4 transform rotate-45 -mt-px"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            ></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SendMessage;