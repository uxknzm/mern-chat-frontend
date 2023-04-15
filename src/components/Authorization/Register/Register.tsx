import React, { useEffect } from 'react';
import { message } from 'antd';
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

    const [messageApi, contextHolder] = message.useMessage();
    const handleError = () => {
        messageApi.open({
            type: "error",
            content: "This is an error message",
        });
    };
    useEffect(() => {
        if (error) {
            handleError();
        }
    }, [error]);
    
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
            contextHolder={contextHolder}
        />
    );
};

export default Register;