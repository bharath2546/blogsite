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

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`,  {data:{ username: user.username }});
            window.location.replace("/");
        }
        catch (err) {
            console.log(err);
        }
        
    }

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        }
        getPost();
    },[path])

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo && <img className="singlePostImg" src={PF+post.photo} alt="" />
                }
                
                <h1 className="singlePostTitle">
                    {post.title}
                    {
                        post.username === user?.username && <div className="singlePostEdit">
                                                                <i className="singlePostIcon far fa-edit"></i>
                                                                <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete}></i>
                                                            </div>
                    }
                    
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:<Link className="link" to={`/?user=${post.username}`} ><b>{post.username}</b></Link></span>
                    <span className="singlePostDate">{ new Date(post.createdAt).toDateString() }</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
