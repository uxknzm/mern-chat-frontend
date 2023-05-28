import React from 'react';
import { AiOutlineEnvironment, AiOutlineIdcard, AiOutlineMail } from 'react-icons/ai';

const PersonalInfo = ({ email }: any) => {
    return (
        <div style={{ padding: "1rem 0px", color: "white" }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "0.5rem",
            }}>
                <AiOutlineEnvironment size={30} />
                <span>BOSNIA</span>
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "0.5rem",
            }}>
                <AiOutlineIdcard size={30} />
                <span>NONE</span>
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "0.5rem",
            }}>
                <AiOutlineMail size={30} />
                <span>{email}</span>
            </div>
        </div>
    );
};

export default PersonalInfo;