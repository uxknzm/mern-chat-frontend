import axios from '../../core/axios';
import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';
import { useSelector } from 'react-redux';
import { aboutMe } from '../../redux/slices/profileSlice';
const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};
const UsersList = () => {
    const [users, setUsers] = useState([]);
    const { id: myId }: any = useSelector(aboutMe);

    const fetchUser = async () => {
        const { data } = await axios.get("/users", config);
        setUsers(data);
    };
    //@ts-ignore
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto w-full sm:px-6 lg:px-8">
            <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2 h-full overflow-auto">
                <div className="pt--10 pr-0 pb-10 pl-0">
                    {users.map((user: any) => {
                        return <UserItem
                            key={user.id}
                            {...user}
                            myId={myId}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default UsersList;