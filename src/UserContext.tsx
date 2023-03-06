import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: any) => {
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        axios.get("/profile", { withCredentials: true })
        .finally(() => {
            setLoad(false);
        })
        .then((res) => {
            setId(res.data.userId);
            setUsername(res.data.username);
        });
    }, [])
    return <UserContext.Provider value={{ username, setUsername, id, setId, load }}>{children}</UserContext.Provider>
};