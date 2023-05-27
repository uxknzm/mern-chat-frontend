import React from 'react';
import { Space, Input, Tooltip } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { RiMessage2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { AiFillBell, AiFillCustomerService, AiFillMessage, AiOutlineSearch, AiOutlineUserAdd } from 'react-icons/ai';
import { InfoCircleOutlined } from '@ant-design/icons';

import UserMenuContainer from '../UserMenu';



const NavbarContainer = () => {
    return (
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", backgroundColor: "rgb(26, 26, 26)", padding: "1rem 6%" }}>
            {/* написать норм стили не инлайн добавить компоненту поиска */}
            <div style={{ display: 'flex', alignItems: 'center', gap: "30px" }}>
                <NavLink to="/">
                    <RiMessage2Line size={32} color='white' />
                </NavLink>
                <Input
                    placeholder="Enter your username"
                    prefix={<AiOutlineSearch size={20} />}
                    style={{ padding: "8px 30px" }}
                    suffix={
                        <Tooltip title="Extra information">
                            <InfoCircleOutlined size={20} style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <Space size={40}>
                    <AiFillBell color='white' size={20} />
                    <AiFillCustomerService color='white' size={20} />
                    <NavLink to={"/users"}>
                    <AiOutlineUserAdd color='white' size={20} />
                    </NavLink>
                    <NavLink to={"/dialogs"}>
                        <AiFillMessage color='white' size={20} />
                    </NavLink>
                    <UserMenuContainer />
                </Space>
            </div>
        </Header>
    );
};

export default NavbarContainer;