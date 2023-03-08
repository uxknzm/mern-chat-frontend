import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: any) => {
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);
    const [load, setLoad] = useState(true);
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };
      
    useEffect(() => {
        axios.get("/profile", config)
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