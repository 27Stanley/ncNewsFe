import axios from "axios";

const request = axios.create({
    baseURL: "https://ncnews1.onrender.com/api"
})


export const fetchAllArticles = () => {
    return request.get(`/articles`)
    .then((response) => {
        return response
    })
}

export const fetchSingleArticle = (article_id) => {
    return request.get(`/articles/${article_id}`)
    .then((response) => {
        return response.data.response
    })
}

export const fetchArticleComments = (article_id) => {
    return request.get(`/articles/${article_id}/comments`)
    .then((response) => {
        const sortedComments = response.data.comments.sort((a, b) => b.votes - a.votes)
        return sortedComments
    })
}

export const incramentVote = (article_id, num) => {
    console.log(num)
    return request.patch(`/articles/${article_id}`, {inc_votes: num})
    .then((response) => {
        console.log("HERE", "\n" ,response)
        //return something idk
    })
    .catch((err) => {
        console.log(err)
        //render <p> tag here
    })
}
