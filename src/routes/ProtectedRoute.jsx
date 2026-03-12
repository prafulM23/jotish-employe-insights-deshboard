import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn, loading } = useContext(AuthContext)

    if (loading) {
        return (<p>Loading....</p>)
    }
    if (!isLoggedIn) {
        return <Navigate to="/" />
    }
    return children
}

export default ProtectedRoute