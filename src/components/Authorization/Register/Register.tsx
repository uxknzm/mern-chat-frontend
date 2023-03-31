import React from 'react';
import { useNavigate } from 'react-router-dom';

import { registration } from '../../../redux/slices/profileSlice';
import { useAppDispatch } from '../../../redux/store';
import RegisterForm from './RegisterForm/RegisterForm';

const Register = ({ setIslogin }: any) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fullname, setFullname] = React.useState("");
    const [error, setError] = React.useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const handleClose = () => {
        setError(true);
    };

    const register = async (e: any) => {
        e.preventDefault();
        //@ts-ignore
        const res = await dispatch(registration({ fullname, email, password }));
        if (res.payload) {
            navigate("/signup/verify");
        } else {
            setError(true);
        };
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
            handleClose={handleClose}
            error={error}
        />
    );
};

export default Register;