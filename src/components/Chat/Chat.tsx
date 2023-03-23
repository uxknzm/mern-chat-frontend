import React, { useEffect } from 'react';
import Contact from '../Contact/Contact';
import Logo from '../Logo/Logo';
import Profile from '../Profile/Profile';
import Users from '../Users/Users';
import { useSelector } from 'react-redux';
import { aboutMe, exit } from '../../redux/slices/profileSlice';
import { useAppDispatch } from '../../redux/store';
import { fetchPeoples, peoples, setOfflinePeople, setOnlinePeople } from '../../redux/slices/peoplesSliece';

const Chat = () => {
    const { userId, username }: any = useSelector(aboutMe);
    const { peoples: allUser, onlinePeoples, offlinePeoples }: any = useSelector(peoples);

    const dispatch = useAppDispatch();

    const connectToWs = () => {
        const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
        const host = "localhost:4040"
        const webSocket = new WebSocket(`${protocol}://${host}`);
        webSocket.addEventListener("message", handleMessage);
        webSocket.addEventListener("close", () => {
            setTimeout(() => {
                console.log('Disconnected. Trying to reconnect.');
                connectToWs();
            }, 1000);
        });
    };
    useEffect(() => {
        connectToWs();
        dispatch(fetchPeoples());
    }, []);

    const handleMessage = (e: any) => {
        const messageData = JSON.parse(e.data);
        if ("online" in messageData) {
            dispatch(setOnlinePeople(messageData.online));
        };
    };
    const logout = () => {
        dispatch(exit());
    };
    useEffect(() => {
        dispatch(setOfflinePeople({ onlinePeoples, userId, allUser }))
    }, [onlinePeoples, allUser]);
    const onlinePeopleExclOurUser = { ...onlinePeoples };
    // @ts-ignore
    delete onlinePeopleExclOurUser[userId];

    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                    <Logo />
                    <Profile logout={logout} username={username} userId={userId} />
                    <Users onlinePeopleExclOurUser={onlinePeopleExclOurUser} offlinePeople={offlinePeoples} />
                </div>
                <div className="flex flex-col flex-auto h-full p-2">
                    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                        <div className="flex h-full flex-grow items-center justify-center">
                            <div className="text-gray-300">&larr; Select a person from the sidebar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;