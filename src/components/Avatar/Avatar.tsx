import { UserOutlined } from '@ant-design/icons';
import { Avatar as AvatarAntd } from 'antd';
import React from 'react';

const Avatar = ({ avatar, size = 40 }: any) => {

    return avatar ? (
        <AvatarAntd  src={avatar} size={size} />
    ) : (
        <AvatarAntd size={size} icon={<UserOutlined />} />
    );
};

export default Avatar;