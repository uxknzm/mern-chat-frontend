import React from 'react';

const DialogsEmty = () => {
    return (

        <div className="h-full border-1 border-slate-200 dark:border-slate-100 text-center rounded-md w-full p-20">
            <i className='bx bxs-contact bx-lg mb-5 dark:text-white'></i>
            <p className="text-xl mb-2 uppercase font-bold dark:text-white">No contacts</p>
            <span className="text-m text-slate-400 block mb-10 dark:text-slate-50">Add friends to your contacts in order to get started</span>
            <button className="bg-blue-400 rounded-full px-5 py-3 text-white hover:bg-blue-500 w-52">Add contact</button>
        </div>
    );
};

export default DialogsEmty;