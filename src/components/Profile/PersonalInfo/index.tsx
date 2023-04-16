import React from 'react';
import { useSelector } from 'react-redux';

import { aboutUser, getStatus } from '../../../redux/slices/aboutUserSlice';
import { getDateLastSeen } from '../../DialogHeader';
import ItemsPersonalInfo from './ItemsPersonalInfo/ItemsPersonalInfo';

const PersonalInfo = () => {
    // selectors
    const { fullname = null, birthday = null, mobile = null, email = null, location = null, last_seen, isOnline }: any = useSelector(aboutUser);
    const status = useSelector(getStatus);

    if (status === "loading" || status === "") {
        return (
            <div className="spinner-container">
                <div className="loading-spinner" />
            </div>
        )
    };

    const informations = [{
        id: 0,
        name: "Full name:",
        item: fullname
    }, {
        id: 1,
        name: "Birthday:",
        item: birthday
    }, {
        id: 2,
        name: "Joined:",
        item: isOnline ? "Online" : getDateLastSeen(last_seen)
    }, {
        id: 3,
        name: "Mobile:",
        item: mobile
    }, {
        id: 4,
        name: "Email:",
        item: email
    }, {
        id: 5,
        name: "Location:",
        item: location
    }];

    return (
        <div className="flex-[0.6_1_0%] bg-white h-full rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
                {informations.map((information) => <ItemsPersonalInfo id={information.id} name={information.name} item={information.item} />)}
            </ul>
        </div>
    );
};

export default PersonalInfo;