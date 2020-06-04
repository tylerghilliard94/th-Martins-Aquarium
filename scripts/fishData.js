let martinFishCollection = [
]


const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfFish) => {
            martinFishCollection = arrayOfFish
        }
    )
}

// 3, 6, 9, 12, etc... fish
const mostHolyFish = () => {
    const holyFish = []
    for (const amount of martinFishCollection) {
        if (amount.length % 3 === 0) {
            holyFish.push(amount)
        }
    }

    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
   
    const soldiers = []
    for (const amount of martinFishCollection) {
        if (amount.length % 5 === 0 && amount.length % 3 != 0 ) {
            soldiers.push(amount)
        }
    }
    return soldiers
}

// Any fish not a multiple of 3 or 5
const normalFish = () => {
    
    const regularFish = []
    for (const amount of martinFishCollection) {
        if (amount.length % 3 != 0 && amount.length % 5 != 0) {
            regularFish.push(amount)
        }
    }

    return regularFish
}

