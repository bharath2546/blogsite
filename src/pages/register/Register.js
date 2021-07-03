import React from 'react'
import "./register.css";
import { Link } from 'react-router-dom';

export default function Regitser() {
    return (
        <div className="register">
            <span className="registerTitle">register here</span>
            <form className="registerForm">
                <label>Username:</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username"
                />
                <label>Email:</label>
                <input
                    className="registerInput"
                    type="email"
                    placeholder="abc@gmail.com"
                />
                <label>Password:</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="enter your password"
                />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton"><Link to="/login" className="link">Login</Link></button>
        </div>
    )
}
