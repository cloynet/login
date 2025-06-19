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

        console.log("login yanıt : ",data);

        const profileRes = await fetch ('https://dummyjson.com/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${data.accessToken}`,
            },
        });

        const profileData = await profileRes.json();

        setToken(data.accessToken);
        setUser(profileData);

        console.log("kullanıcı: ",profileData);

};
    return (
        <AuthContext.Provider value={{ user, token, login, }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
