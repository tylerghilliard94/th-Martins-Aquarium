let locationCollection = [
    
]

const getLocationData = () => {
    return fetch("http://localhost:8088/locations").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfLocations) => {
            locationCollection = arrayOfLocations
        }
    )
}