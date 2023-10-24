import axios from "axios";

const request = axios.create({
    baseURL: "https://ncnews1.onrender.com/api"
})

export const incramentVote = (article_id) => {
    return request.patch(`/articles/${article_id}`)
    .then((response) => {
        console.log("all articles", "\n" ,response)
        return response
    })
}