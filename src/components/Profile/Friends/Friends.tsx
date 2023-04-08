import React from 'react';

const Friends = ({ value, index }: any) => {
    if (value === index) {
        return (
            <div className="p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
                    у вас нет друзей
                </div>
            </div>
        );
    } else {
        return null;
    }
};

/* TEMPLATE  */
{/* <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg" className="w-16 rounded-full" />
    <p className="text-center font-bold text-sm mt-1">Diane Aguilar</p>
</a> */}

export default Friends;