const martinFishCollection = [
    {
        name: "Angus",
        species: "Parrot Fish",
        length: 21,
        location: "Sea of Google",
        food: "Popcorn",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg"
    },

    {
        name: "Beth",
        species:"Puffer Fish",
        length: 22,
        location: "Sea of Cheddar",
        food: "Cheetos",
        picture: "https://rangerrick.org/wp-content/uploads/2018/04/RR-Pufferfish-Sept-2016.jpg"
    },

    {
        name: "Beauregard",
        species: "Lion Fish",
        length: 18,
        location: "Sea of Bing",
        food: "Pain",
        picture: "https://blueocean.net/wp-content/uploads/2017/03/florida-keys-treashres.jpg"
    },

    {
        name: "Rebecca",
        species: "Stargazer",
        length: 13,
        location: "Sea of Cthulu",
        food: "Those Tasty Stars",
        picture: "https://www.saltstrong.com/wp-content/uploads/shutterstock_129741632.jpg"
    },

    {
        name: "Harry",
        species: "Hagfish",
        length: 20,
        location: "Sea of Hogwarts",
        food: "Boggarts",
        picture: "http://o.aolcdn.com/dims-shared/dims3/GLOB/crop/5208x2928+0+190/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/92d7f0f0babf7f031835fd5c1e55e8a9/205478081/pacific-hagfish-picture-id128615783"
    },

    {
        name: "Gertrude",
        species: "Barreleye Fish",
        length: 33,
        location: "Sea of Yahoo",
        food: "Jellies",
        picture: "https://i.redditmedia.com/WsRLR2BteGJRPKmYynb93j4z5qCbjtMsD4qvkqG_QP4.jpg?w=1024&s=164a993dbc48debba5cb14ca0f5e22af"
    },

    {
        name: "Betsy",
        species: "Flowerhorn",
        length: 7,
        location: "Sea of Wolfram",
        food: "Flowers",
        picture: "http://2.bp.blogspot.com/_OG7SzMSq2N0/SxBJkb-CzDI/AAAAAAAAAa0/pvIk-ByEOzg/s1600/fh.jpg"
    },

    {
        name: "Reginald",
        species: "Stonefish",
        length: 24,
        location: "Sea of the Rock",
        food: "Whatever the Rock is cookin",
        picture: "https://haydensanimalfacts.files.wordpress.com/2015/05/reef-stonefish.jpg"
    },

    {
        name: "Ross",
        species: "Goldfish",
        length: 6,
        location: "Sea of Friends",
        food: "Coffee",
        picture: "https://www.thisiscolossal.com/wp-content/uploads/2019/06/tsubaki-12.jpg"
    },
]


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
        if (amount.length % 5 === 0) {
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
