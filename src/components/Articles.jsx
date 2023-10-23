import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Articles.css"


export default function fetchArticleList() {
    const [articles, setArticles] = useState([])
    const articleListUrl = "https://ncnews1.onrender.com/api/articles"
    

    useEffect(() => {
        axios.get(articleListUrl)
        .then((response) => {
            setArticles(response.data.articles) 
        })
        .catch((err) =>{
            console.log(err)
        })
    }, [])



    return (
        <div className="homeContainer">
            <section className="homeText">
                <h2>
                    List of Articles Page
                </h2>
                <h3>
                    Here are a list of all articles available
                </h3>


                <ul className="articleList">
                    {articles.map((article, index) => {
                        return <li key = {"article" + index}>
                            {article.title}
                        </li>
                    })}
                </ul>
            </section>
        </div>
    )
}