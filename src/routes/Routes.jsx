import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { UserContext } from "../UserContext";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/CONST";
import "./spinner.css";

const AppRouter = () => {
    const { username, id, load } = useContext(UserContext);

    if (load) {
        return (
            <div className="spinner-container">
                <div className="loading-spinner" />
            </div>
        );
    };

    return username && id ?
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