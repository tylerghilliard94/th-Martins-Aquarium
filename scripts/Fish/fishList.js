const fishList = () => {

    for (const currentFishObject of martinFishCollection) {
        const fishHTML = fishConverter(currentFishObject)
    
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTML
    }
}

