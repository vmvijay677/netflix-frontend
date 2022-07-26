import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from "../../AuthContext/ApiCalls";
import { AuthContext } from "../../AuthContext/AuthContext";
import './Login.scss'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { dispatch } = useContext(AuthContext);

    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

    const guestLogin = (e) => {
        e.preventDefault();
        setEmail("guest@example.com");
        setPassword("guest");
    };

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>
            </div>

            <div className="container">
                <form>
                    <h1 className='signin-head'>Signin</h1>
                    <input type="email" placeholder="Email or Phone Number" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button className="loginButton" onClick={handleLogin}>Signin</button>
                    <button className="loginButton" onClick={guestLogin}>Guest Signin</button>
                    <p style={{ marginTop: "5px" }}>New to Netflix? <span onClick={() => history.push("/register")}>Sign up now.</span></p>
                    <p style={{ fontSize: "14px", marginTop: "10px" }}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more</span></p>
                </form>
            </div>
        </div>
    )
};

export default Login;