import React from 'react'
import "./write.css";

export default function Write() {
    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://www.start-business-online.com/images/article_manager_uploads/blog.jpg"
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" >
                        <i className="writeIcon fas fa-plus-circle"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                    />
                    <input
                        className="writeInput"
                        type="text"
                        placeholder="title"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="enter your story" type="text" className="writeInput writeText" ></textarea>
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
