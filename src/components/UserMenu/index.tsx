import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import React from 'react';

import Avatar from '../Avatar/Avatar';
import { useSelector } from 'react-redux';
import { aboutMe } from '../../redux/slices/profileSlice';
const items: MenuProps['items'] = [
    {
        label: '1st menu item',
        key: '1',
    },
];
const menuProps = {
    items,
};
const UserMenuContainer = () => {
    const { avatar }: any = useSelector(aboutMe);
    return (
        <Dropdown trigger={['click']} menu={menuProps}>
            <div style={{ cursor: "pointer" }}><Avatar avatar={avatar} size={30} /></div>
        </Dropdown>
    );
};

export default UserMenuContainer;