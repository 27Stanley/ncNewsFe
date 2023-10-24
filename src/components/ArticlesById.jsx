import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { fetchSingleArticle, fetchArticleComments } from "../assets/axiosGet";

import "../styles/ArticlesById.css"


export default function articleAtId() {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setLoading] = useState(true)
    const {articleId} = useParams()

    useEffect(() => {
        Promise.all([
            fetchSingleArticle(articleId),
            fetchArticleComments(articleId)
        ])
        .then(([fetchedArticle, fetchedComments]) => {
            setArticle(fetchedArticle)
            setComments(fetchedComments)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])

    return  isLoading ? (
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
                <p>{article.votes} votes, published on {article.created_at.slice(0,10)}</p>
            </section>

            <section className="voteButtons">
                <button>👍</button>
                <button>👎</button>
            </section>

            <section className="postComments">
                TEMP post comments here
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