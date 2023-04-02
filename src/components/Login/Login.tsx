import React from 'react';
import { NavLink } from "react-router-dom";


const Login = ({ auth, username, setUsername, password, setPassword }: any) => {
    
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto" onSubmit={auth}>
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
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Login</button>
                <div className="text-center mt-2">
                    Already a member? <NavLink to="/register">Register here</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Login;