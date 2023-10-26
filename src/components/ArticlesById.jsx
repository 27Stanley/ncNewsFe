import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { fetchSingleArticle, fetchArticleComments, incramentVote } from "../assets/axiosGet";

import AddComment from "./AddComment";

import "../styles/ArticlesById.css"


export default function articleAtId() {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setLoading] = useState(true)

    //article vote states
    const [updatedVotes, setUpdatedVotes] = useState(0)
    const [voteCountOnRender, setVoteCount] = useState(0)

    const {articleId} = useParams()

    useEffect(() => {
        Promise.all([
            fetchSingleArticle(articleId),
            fetchArticleComments(articleId)
        ])
        .then(([fetchedArticle, fetchedComments]) => {
            setArticle(fetchedArticle)
            setComments(fetchedComments)

            setUpdatedVotes(fetchedArticle.votes)
            setVoteCount(fetchedArticle.votes)

            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])

    return isLoading ? (
        <section className="loadingState">
            <h2>currently loading articles</h2>
        </section>
    ):(
        <div className="articleContainer">
            <section>
                <h2>Article {article.article_id}</h2>
                <h3>{article.title}</h3>
                <img src = {article.article_img_url}></img>
                <p>{article.body}</p>
                <p>Author: {article.author}</p>
                <p>{updatedVotes} votes, published on {article.created_at.slice(0,10)}</p>
            </section>

            <section className="voteButtons">
                <button 
                    disabled = {updatedVotes === voteCountOnRender + 1}
                    
                    onClick={() => {
                    incramentVote(article.article_id, 1)
                    setUpdatedVotes(updatedVotes + 1)}}>
                        👍        
                </button>

                <button 
                    disabled = {updatedVotes === voteCountOnRender - 1}
                    
                    onClick={() => {
                    incramentVote(article.article_id, -1)
                    setUpdatedVotes(updatedVotes - 1)}}>
                        👎        
                </button>
            </section>

            <section className="postComments">
                <AddComment article_id = {article.article_id}></AddComment>
            </section>

            <section className="commentSection">
                <ul>
                    {comments.length < 1 ? (
                        <p>nothing here!</p>
                    ) : (
                        comments.map((comment) => {
                            return <li key={comment.comment_id} className="singleComment">
                                {comment.author} on {comment.created_at.slice(0,10)}
                                <br></br>
                                {comment.body}
                                <br></br>
                                VOTES:{comment.votes}
                                <br></br>
                                <button>👍</button>
                                <button>👎</button>
                            </li>
                        })
                    )}
                </ul>
            </section>
        </div>
    )
}