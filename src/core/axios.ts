import axios from "axios";

axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common["token"] = window.localStorage.token;
axios.defaults.baseURL = 'https://mern-chat-backend-production-118e.up.railway.app/';
// axios.defaults.withCredentials = true;
//@ts-ignore
window.axios = axios;

export default axios;