import React from 'react'
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesm"> Read blogs at </span>
                <span className="headerTitlelg">BlogSite</span>
            </div>
            <img className="headerImg" src="https://wallpapercave.com/wp/wp3013104.jpg" alt="" />
        </div>
    )
}
