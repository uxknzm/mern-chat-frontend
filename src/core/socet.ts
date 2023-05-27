import io from "socket.io-client";

const socket = io("https://mern-chat-backend-production-118e.up.railway.app/");

export default socket;