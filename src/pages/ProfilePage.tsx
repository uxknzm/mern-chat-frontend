import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from "../core/axios"

import Profile from '../components/Profile';

const ProfilePage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const fetchUserAbout = async (id: string) => {
        const { data } = await axios.get(`/user/${id}`);
        setUser(data);
    };

    useEffect(() => {
        id && fetchUserAbout(id);
    }, [id]);
    //@ts-ignore
    return user && <Profile { ...user } id={id} />
};

export default ProfilePage;