import { useContext, useState } from "react"
import "./Login.css"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) {
            return setError("Empty Field")
        }

        const isLogin = login(username, password);
        if (isLogin) {
            navigate("/list")
            setError("true")
        } else {
            setError("false")

        }

    }
    return (
        <>
            <div className="login-box">
                <form onSubmit={handleLogin} className="login-form">
                    <h1>Employe Login</h1>
                    <input type="text" value={username} placeholder="Enter UserName" onChange={(e) => { setUsername(e.target.value); setError("") }} />
                    <input type="password" value={password} placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value); setError("") }} />
                    {error && <p className="login-error">{error}</p>}
                    <button type="submit">Login!</button>
                </form>
            </div>
        </>
    )
}

export default Login 