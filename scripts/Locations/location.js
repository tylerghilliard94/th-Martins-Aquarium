const locationConverter = (locationObject) => {
    const locationHTMLRepresentation = ` <section class="location">
    <div class="">
        <img class="location__picture"
            src="${locationObject.picture}"
            alt="Beautiful picture of the ${locationObject.name}" />
    </div>
    <div class="location__details">
        ${locationObject.details}
    </div>
</section>`
    return locationHTMLRepresentation
}