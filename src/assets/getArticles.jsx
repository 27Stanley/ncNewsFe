import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function generateArticles(){
    const [articles, setArticlesIds] = useState([])

    const articleListUrl = "https://ncnews1.onrender.com/api/articles"

    useEffect(() => {
        axios.get(articleListUrl)
        .then((response) => {
            response = response.data.articles
            setArticlesIds(response)
        })
        .catch((err) =>{
            console.log(err)
        })
    }, [])

    return articles
}
