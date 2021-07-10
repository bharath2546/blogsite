import React from 'react'
import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from './../../context/Context';

export default function TopBar() {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    };

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">Home</Link></li>
                    <li className="topListItem"><Link className="link" to="/about">About</Link></li>
                    <li className="topListItem"><Link className="link" to="/contact">Contact</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">write</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{ user && "Logout"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?
                        (
                            <Link to="/settings">
                                <img className="topImg" src={PF+user.profilePic} alt="" />
                            </Link>
                        )
                        :
                        (
                            <ul className="topList">
                                <li className="topListItem"><Link className="link" to="/login">Login</Link></li>
                                <li className="topListItem"><Link className="link" to="/register">Register</Link></li>
                            </ul>
                        )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
