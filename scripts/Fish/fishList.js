
const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const showNormalFish = () => {
    const fishObjectsArray = normalFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const fishList = () => {
    showHolyFish();
    showSoldierFish();
    showNormalFish();
}

