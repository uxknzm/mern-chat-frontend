import io from "socket.io-client";

console.log(window.location.origin);

const socket = io("https://mern-chat-backend-production-118e.up.railway.app/");

export default socket;