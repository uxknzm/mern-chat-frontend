import CheckEmailInfo from "./components/Authorization/CheckEmailInfo/CheckEmailInfo";
import AuthorizationPage from "./pages/AuthorizationPage";
import HomePage from "./pages/HomePage";
import MessagesPage from "./pages/MessagesPage";
import { PROFILE_ROUTE, DIALOGS_ROUTE, AUTHORIZATION_ROUTE, VERIFY_ROUTE } from "./utils/CONST";

export const publicRoutes = [
    {
        path: AUTHORIZATION_ROUTE,
        Component: AuthorizationPage
    },
    {
        path: VERIFY_ROUTE,
        Component: CheckEmailInfo
    }
]

export const privateRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: HomePage
    },
    {
        path: DIALOGS_ROUTE,
        Component: MessagesPage
    }
]