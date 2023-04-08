import CheckEmailInfo from "./components/Authorization/CheckEmailInfo/CheckEmailInfo";
import AuthorizationPage from "./pages/AuthorizationPage";
import ProfilePage from "./pages/ProfilePage";
import MessagesPage from "./pages/MessagesPage";
import UsersPage from "./pages/UsersPage";
import { PROFILE_ROUTE, DIALOGS_ROUTE, AUTHORIZATION_ROUTE, VERIFY_ROUTE, USERS_ROUTE } from "./utils/CONST";

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
        Component: ProfilePage
    },
    {
        path: DIALOGS_ROUTE,
        Component: MessagesPage
    },
    {
        path: USERS_ROUTE,
        Component: UsersPage
    },
]