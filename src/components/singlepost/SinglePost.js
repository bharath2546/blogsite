import React from 'react'
import "./singlepost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <h1 className="singlePostTitle">
                    This is a Title
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>mario</b></span>
                    <span className="singlePostDate">1hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                    Hello this is description
                </p>
            </div>
        </div>
    )
}
