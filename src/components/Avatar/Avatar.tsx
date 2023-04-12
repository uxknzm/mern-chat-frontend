import React from 'react';

const Avatar = ({ avatar, size = 40 }: any) => {

    return avatar ? (
        <img src={avatar} className={`w-${size} border-4 border-white rounded-full`} />
    ) : (
        <div className={`relative w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <svg className={`absolute w-${size + 2} h-${size + 2} text-gray-400 -left-1`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
    );
};

export default Avatar;