import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext)

    if (!isLoggedIn) {
        return <Navigate to="/" />
    }
    return children
}

export default ProtectedRoute