import CheckEmailInfo from "./components/Authorization/CheckEmailInfo/CheckEmailInfo";
import AuthorizationPage from "./pages/AuthorizationPage";
import ProfilePage from "./pages/ProfilePage";
import DialogsPage from "./pages/DialogsPage";
import UsersPage from "./pages/UsersPage";
import { PROFILE_ROUTE, DIALOGS_ROUTE, AUTHORIZATION_ROUTE, VERIFY_ROUTE, USERS_ROUTE, NEWS_ROUTE } from "./utils/CONST";
import NewsPage from "./pages/NewsPage";

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
        Component: DialogsPage
    },
    {
        path: USERS_ROUTE,
        Component: UsersPage
    },
    {
        path: NEWS_ROUTE,
        Component: NewsPage
    }
]