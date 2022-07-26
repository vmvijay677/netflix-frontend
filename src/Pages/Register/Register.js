import React, { useRef, useState } from 'react';
import './Register.scss';
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try {
            await axios.post("https://netflixclonebyvignesh.herokuapp.com/api/auth/register", { email, username, password });
            history.push("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="register">
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
                <p style={{ fontSize: "48px", fontWeight: "500" }}>Unlimited movies, TV shows, and more.</p>
                <p style={{ fontSize: "28px", fontWeight: "500", marginTop: "15px", marginBottom: "18px" }}>Watch anywhere. Cancel anytime.</p>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                {!email ? (
                    <div id="input">
                        <input type="email" placeholder="Email Address" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form id="input">
                        <input type="username" placeholder="Username" ref={usernameRef} />
                        <input type="password" placeholder="Password" ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>
                )}

                <p style={{ marginTop: "16px", fontSize: "18px" }}>
                    Already have an account?
                    <span id="loginButton" onClick={() => history.push("/login")}>Signin</span>
                </p>
            </div>
        </div>
    );
};

export default Register;