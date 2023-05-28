import React from 'react';
import Avatar from '../../Avatar/Avatar';
import { AiOutlineUserAdd } from 'react-icons/ai';

const UsersItems = () => {
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
                <Avatar size={60} />
                <div style={{ marginLeft: 10, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <h4>NAME</h4>
                    <span>desk</span>
                </div>
            </div>
            <AiOutlineUserAdd size={20} />
        </div>
    );
};

export default UsersItems;