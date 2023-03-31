import React from 'react';

import { login as loginAction, profileMe } from '../../../redux/slices/profileSlice';
import { useAppDispatch } from '../../../redux/store';
import LoginForm from './LoginForm/LoginForm';

const Login = ({ setIslogin }: any) => {
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState(false);

    const [password, setPassword] = React.useState("");
    const dispatch = useAppDispatch();
    const handleClose = () => {
        setError(false);
    };
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
    return <LoginForm
        password={password}
        setPassword={setPassword}
        error={error}
        email={email}
        setEmail={setEmail}
        handleClose={handleClose}
        login={login}
        setIslogin={setIslogin}
    />
};

export default Login;