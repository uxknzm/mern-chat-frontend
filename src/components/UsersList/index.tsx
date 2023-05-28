import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { aboutMe } from '../../redux/slices/profileSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Divider, List, Skeleton } from 'antd';
import Avatar from '../Avatar/Avatar';
import { NavLink } from 'react-router-dom';
import UserDescription from './UserDescription';
import { fetchUsers, getUsers } from '../../redux/slices/usersSlice';
import { useAppDispatch } from '../../redux/store';

const UsersList = () => {
    const { users, status } = useSelector(getUsers);
    const { id: myId }: any = useSelector(aboutMe);

    const dispatch = useAppDispatch();

    const fetchUser = async () => {
        await dispatch(fetchUsers());
    };

    const isMe = (userId: any) => {
        return userId === myId;
    };

    //@ts-ignore
    useEffect(() => {
        if (status === "") {
            fetchUser();
        };
    }, [status]);

    if (status === "loading" || status === "") {
        return null;
    };

    return (
        <div
            id="scrollableDiv"
            style={{
                width: "99%",
                height: "95%",
                overflow: 'auto',
                margin: "0px auto",
                padding: '0 16px',
            }}
        >
            <InfiniteScroll
                dataLength={users.length}
                next={fetchUser}
                hasMore={users.length < 0}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={users}
                    renderItem={(user) => (
                        //@ts-ignore
                        <List.Item key={user.id}>
                            <List.Item.Meta
                                //@ts-ignore
                                avatar={<Avatar avatar={user.avatar} size={120} />}
                                //@ts-ignore
                                title={<NavLink to={`/profile/${user.id}`}>{user.fullname}</NavLink>}
                                //@ts-ignore
                                description={<UserDescription email={user.email} userId={user.id} isMe={isMe} />}
                            />
                            {
                                //@ts-ignore
                                !isMe(user.id) && <button className="w-64 block mx-auto rounded-lg bg-blue-500 hover:shadow-lg font-semibold text-white px-6 py-2">Add friends</button>}
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    );
};

export default UsersList;