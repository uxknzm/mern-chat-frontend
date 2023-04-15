import React from 'react';

import Dialogs from '../components/Dialogs';
import InputMessage from '../components/InputMessage';
import Messages from '../components/Messages';
import DialogHeader from '../components/DialogHeader';

const DialogsPage = () => {

    return (
        <div className='w-full h-full flex'>
            <Dialogs />
            <div className="w-full h-full flex flex-col">
                <DialogHeader />
                <Messages />
                <InputMessage />
            </div>
        </div>
    );
};

export default DialogsPage;