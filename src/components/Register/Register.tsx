import React, { useContext } from 'react';
import axios from "axios";
import { UserContext } from '../../UserContext';
import { NavLink } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { setId, setUsername: setLogged }: any = useContext(UserContext);
    const register = async (e: any) => {
        e.preventDefault();
        const { data } = await axios.post("/register", { username, password });
        console.log(data);
        setLogged(username);
        setId(data.id);
    };
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto" onSubmit={register}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="username"
                    className="block w-full rounded-sm p-2 mb-2 border"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    className="block w-full rounded-sm p-2 mb-2 border"
                />
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
                <div className="text-center mt-2">
                    Already a member? <NavLink to="/login">Login here</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Register;