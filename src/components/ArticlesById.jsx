import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import "../styles/ArticlesById.css"


export default function articleAtId() {
    const [article, setArticle] = useState({})
    const [isLoading, setLoading] = useState(true)
    const {articleId} = useParams()

    const articleListUrl = `https://ncnews1.onrender.com/api/articles/${articleId}`

    useEffect(() => {
        axios.get(articleListUrl)
        .then((article) => {
            article = article.data.response
            setArticle(article)
            setLoading(false)
        })
        .catch((err) =>{
            console.log(err)
            setLoading(false)
        })
    }, [])

    return  isLoading ? (
        <section className="loadingState">
            <h2>currently loading articles</h2>
        </section>
    ):(
        <div className="articleBody">
            <section>
                <h2>Article {article.article_id}</h2>
                <h3>{article.title}</h3>
                <img src = {article.article_img_url}></img>
                <p>{article.body}</p>
                <p>Author: {article.author}</p>
                <p>{article.votes} votes, published on {article.created_at}</p>
            </section>

            <section className="voteButtons">
                <button>TEMP UpvoteButton</button>
                <button>TEMP DownVoteButton</button>
            </section>
        </div>
    )
}