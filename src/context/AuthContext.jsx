import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const Auth = localStorage.getItem("auth");
        console.log(Auth, "-------------------")
        if (Auth === "true") {
            setIsLoggedIn(true)
            setLoading(false)
        }
    }, [])

    const login = (username, password) => {
        if (username === "testuser" && password === "Test123") {
            localStorage.setItem("auth", "true")
            setIsLoggedIn(true)
            return true
        }
        return false;
    }

    const logout = () => {
        localStorage.removeItem("auth")
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};