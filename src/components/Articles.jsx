import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Articles.css"




export default function fetchArticleList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)
    const articleListUrl = "https://ncnews1.onrender.com/api/articles"
    

    useEffect(() => {
        axios.get(articleListUrl)
        .then((response) => {
            setArticles(response.data.articles) 
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
                <h2>
                    List of Articles Page
                </h2>
                <h3>
                    Here are a list of all articles available sorted by recency
                </h3>


                <ul className="articleList">
                    {articles.map((article) => {
                        return <Link to = {`/articles/${article.article_id}`}>
                        <li key = {"article" + article.article_id}>
                        {article.title}
                        </li>
                    </Link>
                    })}
                </ul>
            </section>
        </div>
    )
}