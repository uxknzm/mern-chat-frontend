import React, { useEffect } from 'react';
import CardComponent from '../Card';
import UsersItems from './usersItems/UsersItems';
import { useSelector } from 'react-redux';
import { getUsers } from '../../redux/slices/usersSlice';
import { fetchUsers } from '../../redux/slices/usersSlice';
import { useAppDispatch } from '../../redux/store';

const OffersUsers = () => {
    const { users, status } = useSelector(getUsers);

    const dispatch = useAppDispatch();

    const fetchUser = async () => {
        await dispatch(fetchUsers());
    };

    useEffect(() => {
        if (status === "") {
            fetchUser();
        };
    }, [status]);

    if (status === "loading" || status === "") {
        return null;
    };

    return (
        <CardComponent width={430} height={420}>
            <h2 className="font-medium text-start mb-2 text-slate-400 text-base">Recommendations for you</h2>
            {users.map((user) => {
                //@ts-ignore
                return <UsersItems {...user} />
            })}
        </CardComponent>
    );
};

export default OffersUsers;