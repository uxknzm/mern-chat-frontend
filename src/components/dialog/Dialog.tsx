import React from 'react';
import DialogHeader from '../dialogHeader/DialogHeader';
import LeftMessage from '../Message/LeftMessage';
import RightMessage from '../Message/RightMessage';
import SendMessage from '../SendMessage/SendMessage';

const Dialog = ({ messagesWithoutDupes, userId, sendMessage, username, newMessageText, setNewMessageText, sendFile, divUnderMessages, navigate, interlocutor }: any) => {
    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-col flex-auto h-full overflow-x-hidden p-4">
                <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                    <div className="flex gap-2">
                        <DialogHeader navigate={navigate} interlocutor={interlocutor} />
                    </div>
                    <div className="flex flex-col h-full overflow-x-auto mb-4">
                        <div className="flex flex-col h-full">
                            <div className="grid grid-cols-12 gap-y-2">
                                {messagesWithoutDupes.map((message: any) => (
                                    message.sender === userId ? <RightMessage key={message._id} message={message} username={username} userId={userId} /> : <LeftMessage key={message._id} message={message} currentUser={interlocutor} />
                                ))}
                                <div
                                    // @ts-ignore
                                    ref={divUnderMessages}></div>
                            </div>
                        </div>
                    </div>
                    <form className="flex gap-2" onSubmit={sendMessage}>
                        <SendMessage newMessageText={newMessageText} setNewMessageText={setNewMessageText} sendFile={sendFile} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dialog;