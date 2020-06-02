const tipsList = () => {

    for (const currentTipsObject of tipsCollection) {
        const tipsHTML = tipsConverter(currentTipsObject)
    
        const tipsArticleElement = document.querySelector(".tipList")
        tipsArticleElement.innerHTML += tipsHTML
    }
}
