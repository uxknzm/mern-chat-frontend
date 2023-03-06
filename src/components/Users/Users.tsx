import React from 'react';
import Contact from '../Contact/Contact';

const Users = ({ onlinePeopleExclOurUser, selectedUserId, offlinePeople, setSelectedUserId }: any) => {
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Users</span>
                <span
                    className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                >{onlinePeopleExclOurUser && Object.keys(onlinePeopleExclOurUser).length}</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {Object.keys(onlinePeopleExclOurUser).map(userId => (
                    <Contact
                        key={userId}
                        id={userId}
                        online={true}
                        // @ts-ignore
                        username={onlinePeopleExclOurUser[userId]}
                        // @ts-ignore
                        onClick={() => { setSelectedUserId(userId) }}
                        selected={userId === selectedUserId} />
                ))}
            </div>
            <div className="flex flex-row items-center justify-between text-xs mt-6">
                <span className="font-bold">Offline Users</span>
                <span
                    className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                >{offlinePeople && Object.keys(offlinePeople).length}</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2">
                {Object.keys(offlinePeople).map(userId => (
                    <Contact
                        key={userId}
                        id={userId}
                        online={false}
                        // @ts-ignore
                        username={offlinePeople[userId].username}
                        // @ts-ignore
                        onClick={() => setSelectedUserId(userId)}
                        selected={userId === selectedUserId} />
                ))}
            </div>
        </div>
    );
};

export default Users;