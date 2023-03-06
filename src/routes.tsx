
import Home from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./utils/CONST";

export const publicRoutes = [
    {
        path: REGISTER_ROUTE,
        Component: Register
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    }
]