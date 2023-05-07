import React from 'react';
import UsersList from '../components/UsersList';
import SearchUsers from '../components/UsersList/SearchUsers';

const UsersPage = () => {
    return (
        <div className="w-full pt-10 pb-10">
        <SearchUsers />
        <UsersList />
        </div>
    )
};

export default UsersPage;