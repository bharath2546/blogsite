import React from 'react'
import "./posts.css";
import Post from '../post/Post';

export default function Posts({ posts }) {
    console.log("sss",posts[0]);
    //console.log(posts[0].title);
    return (
        <div className="posts">
            {
                posts.map((p, ind) => {
                    return <Post post={p} key={ind} />
                })
            }
        </div>
    )
}
