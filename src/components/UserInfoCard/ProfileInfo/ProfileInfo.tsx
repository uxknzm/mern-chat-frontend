import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import Avatar from '../../Avatar/Avatar';

const ProfileInfo = ({ fullname, isOnline, avatar }: any) => {
    return (
        <div style={{
            color: "white",
            gap: "0.5rem",
            paddingBottom: "1.1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Avatar size={60} avatar={avatar} />
                <div style={{ marginLeft: 10, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <h4>{fullname}</h4>
                    <div style={{
                        paddingTop: "0.4rem",
                        width: "11rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <span>0 followers</span>
                        <span>0 following</span>
                    </div>
                </div>
            </div>
           <AiOutlineSetting size={20} />
        </div>
    );
};

export default ProfileInfo;