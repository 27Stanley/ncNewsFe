import axios from "axios";

const request = axios.create({
    baseURL: "https://ncnews1.onrender.com/api"
})


export const fetchAllArticles = (topicName) => {
    return request.get(`/articles`, {
        params: {
            topic: topicName
        }
    })
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

export const fetchUser = () => {
    return request.get(`/users`)
    .then((response) => {
        return response.data.response
    })
}

export const fetchTopics = () => {
    return request.get(`/topics`)
    .then((response) => {
        return response.data.topics
    })
}


export const incramentVote = (article_id, num) => {
    return request.patch(`/articles/${article_id}`, {inc_votes: num})
    .catch((err) => {
        console.log(err)
    })
}

export const postComment = (article_id, commentData) => {
    return request.get(`/articles/${article_id}/comments`)
    .then((response) => {
        const existingComments = response.data.comments
        let isDuplicateComment = false

        for (let i=0; i<existingComments.length; i++){
            if (existingComments[i].body === commentData.body && existingComments[i].author === commentData.username){
                isDuplicateComment = true
                break
            }
        }
        
        if (isDuplicateComment === true){
            //do nothing
        } else {
            return request.post(`/articles/${article_id}/comments`, commentData)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}