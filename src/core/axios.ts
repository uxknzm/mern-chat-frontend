import axios from "axios";

axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common["token"] = window.localStorage.token;
axios.defaults.baseURL = 'http://localhost:4040/';
// axios.defaults.withCredentials = true;
//@ts-ignore
window.axios = axios;

export default axios;