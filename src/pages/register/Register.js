import React, { useState } from 'react'
import "./register.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Regitser() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            });
            res.data && window.location.replace("/login");
        }
        catch (err) {
            setError(true);
        }
        
    }

    return (
        <div className="register">
            <span className="registerTitle">register here</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username"
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <label>Email:</label>
                <input
                    className="registerInput"
                    type="email"
                    placeholder="abc@gmail.com"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <label>Password:</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="enter your password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton"><Link to="/login" className="link">Login</Link></button>
            {error && <span style={{color:"red", background:"white", margin:"25px"}}>something is wrong</span>}
        </div>
    )
}
