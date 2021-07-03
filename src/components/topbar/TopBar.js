import React from 'react'
import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {

    const user = false;

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
                    <li className="topListItem"><Link className="link" to="/logout">{ user && "Logout"}</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?
                        (
                            <>
                                <img className="topImg" src="https://wallpaperaccess.com/full/2688562.jpg" alt="" />
                                
                            </>
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
