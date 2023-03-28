import React from 'react';
import { useNavigate } from 'react-router-dom';

import { registration } from '../../../redux/slices/profileSlice';
import { useAppDispatch } from '../../../redux/store';
import RegisterForm from './RegisterForm/RegisterForm';

const Register = ({ setIslogin }: any) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fullname, setFullname] = React.useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const register = (e: any) => {
        e.preventDefault();
        //@ts-ignore
        dispatch(registration({ fullname, email, password }))
        .then(() => {
            navigate("/signup/verify");
        });
    };
    return (
        <RegisterForm
            register={register}
            setEmail={setEmail}
            setPassword={setPassword}
            setFullname={setFullname}
            email={email}
            password={password}
            fullname={fullname}
            setIslogin={setIslogin}
        />
    );
};

export default Register;