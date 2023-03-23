import React from 'react';
import Login from '../components/Login/Login';
import { login } from '../redux/slices/profileSlice';
import { useAppDispatch } from '../redux/store';

const LoginPage = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useAppDispatch();
    
    const auth = (e: any) => {
        e.preventDefault();
        //@ts-ignore
        dispatch(login({username, password}));
    };
    return <Login username={username} password={password} auth={auth} setUsername={setUsername} setPassword={setPassword} />
};

export default LoginPage;