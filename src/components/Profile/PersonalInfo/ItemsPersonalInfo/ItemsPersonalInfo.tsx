import React from 'react';

const ItemsPersonalInfo = ({ name, item, id }: any) => {
    return (
        <li key={id} className="flex border-y py-2">
            <span className="font-bold w-24">{name}</span>
            <span className="text-gray-700">{item}</span>
        </li>
    );
};

export default ItemsPersonalInfo;