import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchTopics } from "../assets/axios";

import "../styles/Topics.css"


export default function Topics() {
    const [topics, setTopics] = useState([])
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        fetchTopics()
        .then((response) => {
            setTopics(response)
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
        <div className="topicsContainer">
            <section className="topicsText">
                <h3>
                    List of all topics
                </h3>

                <ul className="topicList">
                    {topics.map((topic, index) => {
                        return <li className = "topicName" key = {index}>
                            <Link to = {`/articles?topic=${topic.slug}`}>
                                {topic.slug}
                            </Link>
                        </li>
                    })}
                </ul>
            </section>
        </div>
    )
}