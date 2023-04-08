import React from 'react';

const PersonalInfo = ({ fullname, birthday, email, location, mobile, lastSeen }: any) => {
    const { dateFormat, distance } = lastSeen;
    return (
        <div className="flex-1 bg-white h-full rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="text-gray-700">{fullname}</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Birthday:</span>
                    <span className="text-gray-700">{birthday}</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Joined:</span>
                    <span className="text-gray-700">{`${dateFormat} (${distance})`}</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Mobile:</span>
                    <span className="text-gray-700">{mobile}</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="text-gray-700">{email}</span>
                </li>
                <li className="flex border-b py-2">
                    <span className="font-bold w-24">Location:</span>
                    <span className="text-gray-700">{location}</span>
                </li>
            </ul>
        </div>
    );
};

export default PersonalInfo;