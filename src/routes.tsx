import DialogPage from "./pages/DialogPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, DIALOGS_ROUTE } from "./utils/CONST";

export const publicRoutes = [
    {
        path: REGISTER_ROUTE,
        Component: RegisterPage
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    }
]

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: DIALOGS_ROUTE,
        Component: DialogPage
    }
]