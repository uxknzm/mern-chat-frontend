import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../UserContext';
import Contact from '../Contact/Contact';
import Logo from '../Logo/Logo';
import { uniqBy } from "lodash";
import axios from 'axios';
import Profile from '../Profile/Profile';
import RightMessage from '../Message/RightMessage';
import LeftMessage from '../Message/LeftMessage';
import SendMessage from '../SendMessage/SendMessage';
import Users from '../Users/Users';

const Chat = () => {
    const { username, id, setId, setUsername }: any = useContext(UserContext);
    const [ws, setWs] = useState(null);
    const [onlinePeople, setOnlinePeople] = useState({});
    const [offlinePeople, setOfflinePeople] = useState({});
    const [allUser, setAllUser] = useState({});
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [newMessageText, setNewMessageText] = useState("");
    const [messages, setMessages] = useState([]);
    const divUnderMessages = useRef();
    const config = {
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    const connectToWs = () => {
        const ws = new WebSocket("wss://mern-chat-backend-production-118e.up.railway.app");
        // @ts-ignore
        setWs(ws);
        ws.addEventListener("message", handleMessage);
        ws.addEventListener("close", () => {
            setTimeout(() => {
                console.log('Disconnected. Trying to reconnect.');
                connectToWs();
            }, 1000);
        });
    };
    useEffect(() => {
        connectToWs();
    }, []);
    const showOnlinePeople = (peoples: any) => {
        const person = {};
        peoples.forEach(({ userId, username }: any) => {
            // @ts-ignore
            person[userId] = username;
        });
        setOnlinePeople(person);
    };
    const handleMessage = (e: any) => {
        const messageData = JSON.parse(e.data);
        if ("online" in messageData) {
            showOnlinePeople(messageData.online);
        } else if ("text" in messageData) {
            // @ts-ignore
            setMessages(prev => ([...prev, { ...messageData }]))
        };
    };
    const logout = () => {
        axios.post("/logout", config).then(() => {
            setId(null);
            setUsername(null);
        });
    };
    const sendMessage = (e: any, file: Object | null = null) => {
        if (e) e.preventDefault();
        // @ts-ignore
        ws.send(JSON.stringify({
            recipient: selectedUserId,
            text: newMessageText,
            file
        }));
        if (file) {
            axios.get(`/messages/${selectedUserId}`, config).then((res) => {
                setMessages(res.data);
            });
        } else {
            setNewMessageText("");
            // @ts-ignore
            setMessages(prev => ([...prev, { text: newMessageText, sender: id, recipient: selectedUserId, _id: Date.now() }]));
        }
    };
    const sendFile = (e: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            sendMessage(null, {
                name: e.target.files[0].name,
                data: reader.result,
            });
        };
    }
    useEffect(() => {
        const div = divUnderMessages.current;
        if (div) {
            // @ts-ignore
            div.scrollIntoView();
        };
    }, [messages]);
    useEffect(() => {
        if (selectedUserId) {
            axios.get(`/messages/${selectedUserId}`, config).then((res) => {
                const { data } = res;
                console.log(data);

                setMessages(data);
            });
        };
    }, [selectedUserId]);
    useEffect(() => {
        axios.get('/people', config).then(res => {
            setAllUser(res.data);
            const offlinePeopleArr = res.data
                .filter((p: any) => p._id !== id)
                .filter((p: any) => !Object.keys(onlinePeople).includes(p._id));
            const offlinePeople = {};
            offlinePeopleArr.forEach((p: any) => {
                // @ts-ignore
                offlinePeople[p._id] = p;
            });
            setOfflinePeople(offlinePeople);
        });
    }, [onlinePeople]);
    const onlinePeopleExclOurUser = { ...onlinePeople };
    // @ts-ignore
    delete onlinePeopleExclOurUser[id];

    const messagesWithoutDupes = uniqBy(messages, "_id");

    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                    <Logo />
                    <Profile logout={logout} username={username} userId={id} />
                    <Users onlinePeopleExclOurUser={onlinePeopleExclOurUser} selectedUserId={selectedUserId} offlinePeople={offlinePeople} setSelectedUserId={setSelectedUserId} />
                </div>
                <div className="flex flex-col flex-auto h-full p-2">
                    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                        {!selectedUserId && (
                            <div className="flex h-full flex-grow items-center justify-center">
                                <div className="text-gray-300">&larr; Select a person from the sidebar</div>
                            </div>
                        )}
                        {!!selectedUserId && (
                            <div className="flex flex-col h-full overflow-x-auto mb-4">
                                <div className="flex flex-col h-full">
                                    <div className="grid grid-cols-12 gap-y-2">
                                        {messagesWithoutDupes.map((message: any) => (
                                            message.sender === id ? <RightMessage key={message._id} message={message} username={username} userId={id} /> : <LeftMessage key={message._id} message={message} allUser={allUser} selectedUserId={selectedUserId} />
                                        ))}
                                        <div
                                            // @ts-ignore
                                            ref={divUnderMessages}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!!selectedUserId && (
                            <form className="flex gap-2" onSubmit={sendMessage}>
                                <SendMessage newMessageText={newMessageText} setNewMessageText={setNewMessageText} sendFile={sendFile} />
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;