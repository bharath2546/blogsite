import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import "./singlepost.css";
import { Context } from './../../context/Context';

export default function SinglePost() {
    const { user } = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`,  {data:{ username: user.username }});
            window.location.replace("/");
        }
        catch (err) {
            console.log(err);
        }
        
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`,  { username: user.username, title: title, desc: desc });
            setUpdateMode(false);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    },[path])

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo && <img className="singlePostImg" src={PF+post.photo} alt="" />
                }
                {
                    updateMode ? <input  onChange={(e)=>setTitle(e.target.value)} type="text" value={title} className="singlePostTitleInput" autoFocus={true} /> : (
                        <h1 className="singlePostTitle">
                            {title}
                            {   
                                post.username === user?.username && <div className="singlePostEdit">
                                                                <i className="singlePostIcon far fa-edit" onClick={(e)=>setUpdateMode(true)}></i>
                                                                <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete}></i>
                                                            </div>
                            }
                    
                        </h1>
                    )
                }
                
                
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:<Link className="link" to={`/?user=${post.username}`} ><b>{post.username}</b></Link></span>
                    <span className="singlePostDate">{ new Date(post.createdAt).toDateString() }</span>
                </div>
                {
                    updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)} /> : (
                        <p className="singlePostDesc">
                            {desc}
                        </p>
                    )
                }
                {
                    updateMode && <button className="singlePostButton" onClick={handleUpdate} >update</button>
                }
                
            </div>
        </div>
    )
}
