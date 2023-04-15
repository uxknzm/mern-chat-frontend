import { message } from 'antd';
import React, { useEffect } from 'react';

import { login as loginAction, profileMe } from '../../../redux/slices/profileSlice';
import { useAppDispatch } from '../../../redux/store';
import LoginForm from './LoginForm/LoginForm';

const Login = ({ setIslogin }: any) => {
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState(false);
    const [password, setPassword] = React.useState("");

    const dispatch = useAppDispatch();
    const login = async (e: any) => {
        e.preventDefault();
        //@ts-ignore
        const res = await dispatch(loginAction({ email, password }));
        if (res.payload) {
            dispatch(profileMe());
        } else {
            setError(true);
        };
    };

    const [messageApi, contextHolder] = message.useMessage();
    const handleError = () => {
        messageApi.open({
          type: "error",
          content: "User not found",
        });
    };
    useEffect(() => {
      if (error) {
        handleError();
      };
    }, [error]);

    return <LoginForm
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        login={login}
        setIslogin={setIslogin}
        contextHolder={contextHolder}
    />
};

export default Login;