import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import { privateRoutes, publicRoutes } from "../routes";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/CONST";
import { aboutMe, isLoading } from "../redux/slices/profileSlice";

import "./spinner.css";

const AppRouter = () => {
    const { userId, username } = useSelector(aboutMe);
    const status = useSelector(isLoading);

    if (status === "loading") {
        return (
            <div className="spinner-container">
                <div className="loading-spinner" />
            </div>
        );
    };

    return username && userId ?
        (
            <Routes>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
            </Routes>
        )
};

export default AppRouter;