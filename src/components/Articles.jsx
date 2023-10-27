import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";

import { fetchAllArticles } from "../assets/axios";

import "../styles/Articles.css"


export default function fetchArticleList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)

    const [topicName, setTopicName] = useSearchParams()
    

    useEffect(() => {
        let topicNameString = topicName.get("topic")
        fetchAllArticles(topicNameString)
        .then((response) => {
            setArticles(response.data.articles) 
            setLoading(false)
        })
        .catch((err) =>{
            console.log(err)
            setLoading(false)
        })
    }, [topicName])


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

                <ul className="articleList">
                    {articles.map((article) => {
                            <h3>
                            Here are a list of all articles {`${article.topic}`}
                            </h3>
                        return <Link to = {`/articles/${article.article_id}`}>
                        <li key = {article.article_id}>
                        {article.title}
                        </li>
                    </Link>
                    })}
                </ul>
            </section>
        </div>
    )
}