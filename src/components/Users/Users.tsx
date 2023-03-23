import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

const Users = ({ onlinePeopleExclOurUser, offlinePeople }: any) => {
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
                    <Link to={`/dialog/${userId}`} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                        <Contact
                            key={userId}
                            id={userId}
                            online={true}
                            // @ts-ignore
                            username={onlinePeopleExclOurUser[userId]}
                            // @ts-ignore
                             />
                    </Link>
                ))}
            </div>
            <div className="flex flex-row items-center justify-between text-xs mt-6">
                <span className="font-bold">Offline Users</span>
                <span
                    className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                >{offlinePeople && Object.keys(offlinePeople).length}</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-32 overflow-y-auto">
                {Object.keys(offlinePeople).map(userId => (
                    <Link to={`/dialog/${userId}`} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                        <Contact
                            key={userId}
                            id={userId}
                            online={false}
                            // @ts-ignore
                            username={offlinePeople[userId].username}
                            // @ts-ignore
                             />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Users;