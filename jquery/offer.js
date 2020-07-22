const offersList = $(".offer .price-list");

// Using arrays -> page will be very flexible

let offersArr = [

    {
        name: 'Healthy',
        src: 'img/offer/healthy-food.png',
        desc: ["Healthy vegetables"],
        price: 10

    },

    {
        name: 'Fresh',
        src: 'img/offer/fresh.png',
        desc: ["Vegetables and fruit", "Ideal for summer"],
        price: 15
    },

    {
        name: 'Sweet',
        src: 'img/offer/sweet.png',
        desc: ["A lot of fruit", "Ideal for birthday", "Many flavours"],
        price: 20
    }


]

// I create an array of divElements

offersArr = offersArr.map(offer => {

    const divElement = $(

        `<div class="col">
        
            <h3>${offer.name}</h3>

            <div class="img"><img src=${offer.src}></div>

        </div>`
    )


    for (let i = 0; i < offer.desc.length; i++) {

        const pElement = $(`<p>${offer.desc[i]}</p>`)

        divElement.append(pElement)
    }

    const price = $(`<p class="price"><span>${offer.price} $</span></p>`);

    divElement.append(price);

    return divElement;
})

// I append all the elements to offersList

offersArr.forEach(offerDiv => {

    offersList.append(offerDiv);
});