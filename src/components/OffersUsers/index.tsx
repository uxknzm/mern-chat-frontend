import React from 'react';
import CardComponent from '../Card';
import UsersItems from './usersItems/UsersItems';

const OffersUsers = () => {
    return (
        <CardComponent width={430}>
            <h2 style={{
                textAlign: "start",
                fontWeight: 500,
                margin: "0px 0px 0.7rem",
                lineHeight: 1.5,
                color: "rgb(194, 194, 194)"
            }}>Recommendations for you</h2>
            <UsersItems />
            <UsersItems />
            <UsersItems />
            <UsersItems />
            <UsersItems />
            <UsersItems />
            <UsersItems />
            <UsersItems />
            <UsersItems />
        </CardComponent>
    );
};

export default OffersUsers;