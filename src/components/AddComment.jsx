import React from "react";
import { postComment } from "../assets/axios";
import { useState, useContext } from "react";
import { UsernameContext } from "./UsernameContext";

import "../styles/AddComment.css"

export default function AddComment({article_id}) {

    const [commentData, setCommentData] = useState({username: "", body: ""})

    const {username, setUsername} = useContext(UsernameContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("comment posted!")
        postComment(article_id, commentData)
        setCommentData({username: "", body: ""})
    }

    return(
        <div className="postCommentForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="commentBody"></label>
                    <input
                    className="commentBox"
                    placeholder="Add a comment" 
                    type="text"
                    value = {commentData.body}
                    onChange={(e) => {
                        setCommentData((currentCommentData) => {
                            const clonedCommentData = {...currentCommentData}
                            clonedCommentData.username = username
                            clonedCommentData.body = e.target.value
                            return clonedCommentData
                        })
                    }}
                    required
                    ></input>

                <label htmlFor="submit"></label>
                    <button type="submit">Comment!</button>

            </form>

        </div>
    )

}