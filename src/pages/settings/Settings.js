import React from 'react'
import "./settings.css";
import Sidebar from "./../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label>profile picture</label>
                    <div className="settingsPP">
                        <img
                            className="settingsPPImg"
                            src="https://i.pinimg.com/474x/97/49/16/97491609b8a4380aa2f5f0954072d139.jpg"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input
                            style={{display:"none"}}
                            type="file"
                            id="fileInput"
                        />
                    </div>
                    <label>
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="mario"
                    />

                    <label>
                        email
                    </label>
                    <input
                        type="email"
                        placeholder="mario@gmail.com"
                    />

                    <label>
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="*****"
                    />
                    <button className="settingsButton">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
