export const handleArticleVoteClick = (num, articleVoteCount, setArticleVoteCount) => {
    console.log("in component")
    const newVoteCount = articleVoteCount + num
    return setArticleVoteCount(newVoteCount)
}