import React from 'react';
import AvatarProfile from '../AvatarProfile/AvatarProfile';

const Profile = ({ logout, username, userId }: any) => {
    return (
        <div
            className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
        >
            <button
                onClick={logout}
                className="text-sm bg-blue-100 py-1 px-2 text-gray-500 border rounded-sm">logout</button>
                <AvatarProfile username={username} userId={userId} online={true}/>
            <div className="text-sm font-semibold mt-2">{username}</div>
            <div className="flex flex-row items-center mt-3">
                <div
                    className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full"
                >
                    <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div className="leading-none ml-1 text-xs">Active</div>
            </div>
        </div>
    );
};

export default Profile;