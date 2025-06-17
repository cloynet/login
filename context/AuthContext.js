'use client';
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const login = async (username, password) => {

        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();


        setToken(data.token);
        //console.log(data); bu geliyor


        const profileRes = await fetch ('https://dummyjson.com/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${data.token}`,
            },
        })

        const profileData = await profileRes.json();
        setUser(profileData);
        console.log(profileData); // burası gelmiyor

};


    

    return (
        <AuthContext.Provider value={{ user, token, login, }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);