import { useState } from "react";
import "../style/Register.css"
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";

export const Register = ({ token, setToken }) => {
    const [loading, setLoading] = useState(null);
    const [err, setErr] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [Lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function handleSubmit() {
        setLoading(true)
        //create new user obj
        const newUser = {
            email,
            username,
            password,
            name: {
                fName,
                Lname,
            },
        };


        try {
            const respone = await registerUser(newUser);
            // response && setErr(null);
            // response && localStorage.setItem("capstone-token", response.token);
            // setToken(response.token);

            setLoading(false)
            navigate("/");

        } catch (e) {
            console.error(e);
            setErr("Wrong username or password. Please try again");
            setLoading(false);
        }
    };


    return (
        <div className="register-container">
            <div className="register-title">
                <h2>Sign up</h2>
            </div>

            <form className="register-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <label htmlFor="first-name" className="register-label">
                    *First Name:
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="register-inputs"
                        value={fName}
                        onChange={(e) => {
                            setFName(e.target.value);
                        }}
                        required
                    />
                </label>
                <label htmlFor="last-name" className="register-label">
                    *Last Name:
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="register-inputs"
                        value={Lname}
                        onChange={(e) => {
                            setLName(e.target.value);
                        }}
                        required
                    />
                </label>

                <label htmlFor="email" className="register-label">
                    *Email:
                    <input
                        type="email"
                        name="email"
                        className="register-inputs"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />
                </label>

                <label htmlFor="username" className="register-label">
                    *Username:
                    <input
                        type="text"
                        name="username"
                        className="register-inputs"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        required
                    />
                </label>

                <label htmlFor="password" className="register-label">
                    *Password:
                    <input
                        type="text"
                        name="password"
                        className="register-inputs"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                    />
                </label>

                <div className="buttons">
                    <div className="register-button-div">
                        <button
                            type="submit"
                            className="simple-button"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            {loading && <h3 className="Loading">Authenticating, Please Wait...</h3>}
        </div>
    )
}