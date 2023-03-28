import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { privateRoutes, publicRoutes } from "../routes";
import { PROFILE_ROUTE, AUTHORIZATION_ROUTE } from "../utils/CONST";
import { aboutMe, isAuth, isLoading, token } from "../redux/slices/profileSlice";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "./spinner.css";


const AppRouter = () => {
  const { id, email, fullname }: any = useSelector(aboutMe);
  
  
  const isToken = useSelector(token);
  const auth = useSelector(isAuth);
  const status = useSelector(isLoading);
  // console.log(auth, isToken);
  if (status === "loading") {
    return (
      <div className="spinner-container">
        <div className="loading-spinner" />
      </div>
    );
  }

  return auth && isToken ? (
    <div className="p-5 h-screen w-full">
      <div className="h-full bg-white overflow-hidden flex flex-col rounded-xl overflow-hidden shadow-xl">
        <Navbar userId={id} username={fullname} />
        <div style={{paddingTop: "58px"}} className="h-full flex">
          <Sidebar />
          <Routes>
            {privateRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={PROFILE_ROUTE} />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={AUTHORIZATION_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
