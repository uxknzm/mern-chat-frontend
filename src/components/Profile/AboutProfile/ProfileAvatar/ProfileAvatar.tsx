import { Dropdown } from 'antd';
import React from 'react';
import Avatar from '../../../Avatar/Avatar';

const ProfileAvatar = ({ items, uploadHandler, avatar, fullname, isMe, profileId }: any) => {
    return (
        <>
            <div className="w-full h-[250px]">
                <img style={{ objectFit: "cover" }} src="https://sun9-77.userapi.com/impg/qI9SD8Fg0WGNYdpU8viDINUuoNqA-3mfYuNd4g/JZr8OeCujBM.jpg?size=2560x1707&quality=95&sign=88f1464226c16714dee01d01152e2013&type=album" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div className="flex flex-col items-center -mt-20">
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottom"
                >
                    <div><Avatar avatar={avatar} size={32} /></div>
                </Dropdown>

                <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl">{fullname}</p>
                    {profileId === "64296978d41e1e3924940d70" && <span className="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>}
                </div>
                <p className="text-sm text-gray-500">New York, USA</p>
                {isMe && <input type="file" name="file" onChange={uploadHandler} />}
            </div>
        </>
    );
};

export default ProfileAvatar;