import axios from 'axios';
import { uniqBy } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Dialog from '../components/dialog/Dialog';
import { peoples } from '../redux/slices/peoplesSliece';
import { aboutMe } from '../redux/slices/profileSlice';

const DialogPage = () => {
    const { userId, username }: any = useSelector(aboutMe);
    const { peoples: allUser }: any = useSelector(peoples);

    const [ws, setWs] = useState(null);
    const { userId: selectedUserId } = useParams();
    const navigate = useNavigate();
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
    const interlocutor = allUser.find((user: any) => {
        return user._id === selectedUserId;
    });
    const connectToWs = () => {
        const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
        const host = "localhost:4040"
        const webSocket = new WebSocket(`${protocol}://${host}`);
        // @ts-ignore
        setWs(webSocket);
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
    }, []);

    const handleMessage = (e: any) => {
        const messageData = JSON.parse(e.data);
        if ("text" in messageData) {
            // @ts-ignore
            setMessages(prev => ([...prev, { ...messageData }]))
        };
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
            setMessages(prev => ([...prev, { text: newMessageText, sender: userId, recipient: selectedUserId, _id: Date.now() }]));
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
    };
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

    const messagesWithoutDupes = uniqBy(messages, "_id");
    // if (!messagesWithoutDupes.length) {
    //     return (
    //         <div className="spinner-container">
    //             <div className="loading-spinner" />
    //         </div>
    //     );
    // };

    return <Dialog
        navigate={navigate}
        divUnderMessages={divUnderMessages}
        messagesWithoutDupes={messagesWithoutDupes}
        userId={userId} sendMessage={sendMessage}
        username={username}
        newMessageText={newMessageText}
        interlocutor={interlocutor}
        setNewMessageText={setNewMessageText}
        sendFile={sendFile} />
};

export default DialogPage;