import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchAllArticles } from "../assets/axios";

import "../styles/Home.css"

export default function fetchArticleList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        fetchAllArticles()
        .then((response) => {

            const mostRecentThreeArticles = response.data.articles.sort((a, b) => a.created_at - b.created_at)
            setArticles(mostRecentThreeArticles.slice(0,3))
            setLoading(false)
        })
        .catch((err) =>{
            console.log(err)
            setLoading(false)
        })
    }, [])


    return isLoading ? (
        <section className="loadingState">
            <h2>currently loading articles</h2>
        </section>
    ):(
        <div className="homeContainer">
            <section className="homeText">
                <h3>
                    Northcoder's most recent three articles
                </h3>

                <ul className="articleList">
                    {articles.map((article) => {
                        return <li key = {"article" + article.article_id} className="articleSection">
                            <img src={article.article_img_url}></img>
                            <br></br>
                            <Link to = {`/articles/${article.article_id}`}>Title: {article.title}
                            <br></br>
                            By: {article.author}
                            <br></br>
                            {article.votes} votes, published on: {article.created_at.slice(0,10)}
                            </Link>
                        </li>
                        
                    })}
                </ul>
            </section>
        </div>
    )
}