import React from 'react'
import "./login.css";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login here</span>
            <form className="loginForm">
                <label>Email:</label>
                <input
                    className="loginInput"
                    type="email"
                    placeholder="abc@gmail.com"
                />
                <label>Password:</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="enter your password"
                />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton"><Link to="/register" className="link">Register</Link></button>
        </div>
    )
}
