import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const Auth = localStorage.getItem("auth");
        if (Auth === "true") {
            setIsLoggedIn(true)
        }
    }, [])

    const login = (username, password) => {
        if (username === "testuser" && password === "Test123") {
            localStorage.setItem("auth", "true")
            return true
        }
        return false;
    }

    const logout = () => {
        localStorage.removeItem("auth")
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};