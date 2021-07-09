import axios from 'axios';
import React, { useState, useContext } from 'react'
import "./write.css";
import { Context } from './../../context/Context';

export default function Write() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
                console.log("photo uploaded", data);
            }
            catch (err) {
                console.log("photo not uploaded");
            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        }
        catch (err) {
            console.log(err);
        }

        
    }

    return (
        <div className="write">
            {
                file && <img
                            className="writeImg"
                            src={URL.createObjectURL(file)}
                            alt=""
                        />
            }
            
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" >
                        <i className="writeIcon fas fa-plus-circle"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={e=>setFile(e.target.files[0])}
                    />
                    <input
                        className="writeInput"
                        type="text"
                        placeholder="title"
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="enter your story" type="text" className="writeInput writeText"
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button
                    className="writeSubmit"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
