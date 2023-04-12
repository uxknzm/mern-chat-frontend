import { formatDistance, format } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';

import { aboutMe } from '../../redux/slices/profileSlice';
import AboutProfile from './AboutProfile/AboutProfile';
import Friends from './Friends/Friends';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Posts from './Posts/Posts';

const getDateLastSeen = (date: any) => {
    const dateFormat = format(new Date(date), 'dd MMMM yyyy');
    const distance = formatDistance(new Date(date), new Date(), { addSuffix: true });
    return {
        dateFormat,
        distance
    };
};

const getItemsFromTabs = (fullname: any) => {
    let items: any = [];
    items = [
        {
            label: "Friends",
            id: 0,
            content: <Friends />
        }
    ].concat(items);

    items = [
        {
            label: "Posts",
            id: 1,
            content: <Posts fullname={fullname} />
        }
    ].concat(items);
    return items;
};

const Profile = ({ fullname, email, last_seen, id, avatar }: any) => {
    const { id: myId }: any = useSelector(aboutMe);

    const lastSeen = getDateLastSeen(last_seen);

    const items = getItemsFromTabs(fullname);

    const itemsFromTabs = items.map((item: any) => {
        return {
            label: item.label,
            key: item.id,
            children: item.content,
        };
    });

    return (
        <div className="p-4 w-full overflow-auto">
            <AboutProfile fullname={fullname} isMe={myId === id} id={id} avatar={avatar} />
            <div className="my-4 flex">
                <PersonalInfo fullname={fullname} email={email} lastSeen={lastSeen} />
                <div className="bg-white flex-1 w-full rounded-lg shadow-xl p-8 ml-4">
                    <Tabs
                        defaultActiveKey="1"
                        centered
                        items={itemsFromTabs}
                    />
                    {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Friends" />
                        <Tab label="Posts" />
                        <Tab label="Photo" />
                    </Tabs>
                    <Friends/>
                    <Posts value={value} index={1} fullname={fullname} /> */}
                </div>
                {/* <Friends /> */}
            </div>
        </div>
    );
};

export default Profile;