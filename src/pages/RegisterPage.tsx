import React from 'react';
import Register from '../components/Register/Register';
import { registration } from '../redux/slices/profileSlice';
import { useAppDispatch } from '../redux/store';

const RegisterPage = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useAppDispatch();

    const register = (e: any) => {
        e.preventDefault();
        //@ts-ignore
        dispatch(registration({ username, password }));
    };
    return <Register register={register} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
};

export default RegisterPage;