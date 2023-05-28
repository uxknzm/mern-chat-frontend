import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, notification } from 'antd';
import useSound from "use-sound";

import { privateRoutes, publicRoutes } from "../routes";
import { AUTHORIZATION_ROUTE } from "../utils/CONST";
import { aboutMe, isAuth, isLoading } from "../redux/slices/profileSlice";
import Sidebar from "../components/Sidebar";

import "./spinner.css";
import { useEffect } from "react";
import socket from "../core/socet";
import { useAppDispatch } from "../redux/store";
import { setCurrentDialogId } from "../redux/slices/dialogsSlice";
import boopSfx from "./zvuk-dostavlennogo-soobscheniya.mp3";
import NavbarContainer from "../components/Navbar";


const AppRouter = () => {
  const auth = useSelector(isAuth);
  const status = useSelector(isLoading);
  const [play] = useSound(boopSfx);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const me = useSelector(aboutMe);
  const { fullname, id, avatar }: any = me;

  useEffect(() => {
    socket.on("response", (data: any) => {
      play();
      api.open({
        message: data.fullname,
        description: data.text,
        icon: <img width="45px" height="50px" style={{ borderRadius: "100%", position: "relative", left: "-18px", top: "5px" }} src={data.avatar || ""} alt={data.id} />,
        onClick: () => {
          dispatch(setCurrentDialogId(data.id))
          navigate(`/dialogs`);
        },
        placement: "bottomLeft",
      });
    });
  }, []);

  if (status === "loading" || status === "") {
    return (
      <div className="spinner-container">
        <div className="loading-spinner" />
      </div>
    );
  };

  return auth ? (
    <div style={{ backgroundColor: "black" }} className="h-screen">
      <NavbarContainer />
      <div style={{ height: "92%" }} className="p-5 w-full">
        {contextHolder}
        <div className="h-full overflow-hidden flex flex-col rounded-xl overflow-hidden shadow-xl">
          <div className="h-full flex">
            {/* <Sidebar fullname={fullname} id={id} avatar={avatar} me={me} /> */}
            <Routes>
              {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route path="*" element={<Navigate to={`/profile/${id}`} />} />
            </Routes>
          </div>
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
