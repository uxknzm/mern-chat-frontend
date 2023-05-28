import { Avatar as AvatarAntd } from 'antd';
import React from 'react';

const Avatar = ({ avatar = "https://rsaa.org.uk/wp-content/uploads/2023/02/shutterstock_1114445501-scaled.jpg", size = 40 }: any) => {

    return <AvatarAntd  src={avatar} size={size} />
};

export default Avatar;