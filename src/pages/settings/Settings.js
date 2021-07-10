import React, { useContext } from 'react'
import "./settings.css";
import Sidebar from "./../../components/sidebar/Sidebar";
import { Context } from './../../context/Context';
import { useState } from 'react';
import axios from 'axios';

export default function Settings() {

    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState(null);
    const PF = "http://localhost:5000/images/";
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
                
            }
            catch (err) {
            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        }
        catch (err) {
            console.log(err);
            dispatch({ type: "UPDATE_FAILURE" });
        }

    }
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>profile picture</label>
                    <div className="settingsPP">
                        <img
                            className="settingsPPImg"
                            src={file ? URL.createObjectURL(file) :  PF+user.profilePic}
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input
                            style={{display:"none"}}
                            type="file"
                            id="fileInput"
                            onChange={e=>setFile(e.target.files[0])}
                        />
                    </div>
                    <label>
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder={user.username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />

                    <label>
                        email
                    </label>
                    <input
                        type="email"
                        placeholder={user.email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <label>
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="*****"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className="settingsButton" type="submit">Update</button>
                    {
                        success && <span style={{color:"green", textAlign:"center", margin:"20px"}}>Profile has been updated</span>
                    }
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
