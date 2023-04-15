import { Tabs } from 'antd';
import React from 'react';
import Friends from '../Friends/Friends';
import Posts from '../Posts/Posts';


const getItemsFromTabs = () => {
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
            content: <Posts />
        }
    ].concat(items);
    return items;
};

const TabsContainer = () => {
    const items = getItemsFromTabs();

    const itemsFromTabs = items.map((item: any) => {
        return {
            label: item.label,
            key: item.id,
            children: item.content,
        };
    });
    return (
        <Tabs
            defaultActiveKey="1"
            centered
            items={itemsFromTabs}
        />
    );
};

export default TabsContainer;