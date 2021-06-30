import React from 'react'
import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://www.thefennvoice.org/.a/6a017d3e8f0065970c022ad3c481a6200d-pi" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Hello world! how are you</span>
                <hr />
                <span className="postDate">5 hour ago</span>
            </div>
            <p className="postDesc">
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
                This is discription
            </p>
        </div>
    )
}
