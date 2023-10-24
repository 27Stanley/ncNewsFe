import axios from "axios";

const request = axios.create({
    baseURL: "https://ncnews1.onrender.com/api"
})


export const fetchAllArticles = () => {
    return request.get(`/articles`)
    .then((response) => {
        console.log("all articles", "\n" ,response)
        return response
    })
}

export const fetchSingleArticle = (article_id) => {
    return request.get(`/articles/${article_id}`)
    .then((response) => {
        // console.log("single article", "\n" ,response)
        return response.data.response
    })
}

export const fetchArticleComments = (article_id) => {
    return request.get(`/articles/${article_id}/comments`)
    .then((response) => {
        // console.log("article comments", "\n" ,response)
        const sortedComments = response.data.comments.sort((a, b) => b.votes - a.votes)
        return sortedComments
    })
}
