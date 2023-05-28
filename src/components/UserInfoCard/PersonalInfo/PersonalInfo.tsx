import React from 'react';
import { AiOutlineEnvironment, AiOutlineIdcard, AiOutlineMail } from 'react-icons/ai';

const PersonalInfo = ({ email }: any) => {
    return (
        <div className="text-white py-4 px-0">
            <div className="flex items-center gap-4 mb-2">
                <AiOutlineEnvironment size={30} />
                <span>BOSNIA</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
                <AiOutlineIdcard size={30} />
                <span>NONE</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
                <AiOutlineMail size={30} />
                <span>{email}</span>
            </div>
        </div>
    );
};

export default PersonalInfo;