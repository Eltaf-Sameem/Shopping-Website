import { use, useEffect, useState } from "react";
import "../style/Login.css"
import { login } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ token, setToken, setUser, setCart }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(null);
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true)
        try {
            //login user 
            const response = await login(username, password)
            response && setErr(null)
            response && localStorage.setItem("shop-token", response.token)
            console.log("here");
            
            setToken(response.token)
            setUser(username)
            localStorage.setItem("shop-user", username)

            //update user cart 
            setCart(JSON.parse(localStorage.getItem(`${username}-cart`)) || []);
            setLoading(false);
            navigate("/")
        } catch (e) {
            console.error(e)
            setErr("Wrong username or password. Please try again")
            setLoading(false);
        }
    };

    useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Sign in</h2>
                <div className="login-inputs">
                    <label>Username: </label>
                    <input
                        placeholder="johnd"
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="login-inputs">
                    <label>Password: </label>
                    <input
                        placeholder="m38rmF$"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="buttons">
                    <button className="simple-button" type="button" onClick={handleLogin}>Login</button>
                </div>
            </form>

            {loading ? (
                <h3 className="loading">Authenticating, Please wait...</h3>
            ) : (
                err && (
                    <div className="message-box">
                        <p>{err}</p>
                    </div>
                )
            )}

            <div className="register-div">
                <p>
                    Don't have an account? <Link to={"/register"}>Register</Link> here
                </p>
            </div>


        </div>
    )
}