import React from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
};

const ModalContent = ({ setNewMessage, modalOk, newMessage }: any) => {
    return (
            <div className="mx-auto max-w-xl">
                <div className="relative bg-white overflow-hidden rounded-md border border-gray-300 shadow-sm focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50 p-5">
                    <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="block w-full border-0 focus:border-0 focus:ring-0 focus:outline-0 min-h-[12rem]" rows={3} placeholder="Leave a message"></textarea>
                    <div className="flex w-full items-center justify-between bg-white p-2">
                    <button onClick={modalOk} className="bg-blue-400 rounded p-1.5 text-white hover:bg-blue-500">Add mwssage</button>
                        <div className="flex space-x-1">
                            <button className="rounded p-1.5 text-secondary-400 hover:bg-primary-50 hover:text-primary-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </button>
                            <button className="rounded p-1.5 text-secondary-400 hover:bg-primary-50 hover:text-primary-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ModalContent;