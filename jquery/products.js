const productsGalery = $(".products .galery");

let productsArr = [

    {
        name: 'apple',
        src: 'img/products/apple.png',
        price: 2.5

    },

    {
        name: 'cabbage',
        src: 'img/products/cabbage.png',
        price: 3

    },

    {
        name: 'carrot',
        src: 'img/products/carrot.png',
        price: 2.5

    },

    {
        name: 'cucumber',
        src: 'img/products/cucumber.png',
        price: 2.5

    },

    {
        name: 'onion',
        src: 'img/products/onion.png',
        price: 2.5

    },

    {
        name: 'juice',
        src: 'img/products/juice.png',
        price: 2.5
    },
]

productsArr = productsArr.map(product => {

    const div = $(

        `<div class="product">

            <h3>${product.name}</h3>
            <img src=${product.src}> 
            <p> <span class="price">${product.price} $</span></p>
       
         </div>`
    )

    return div;
});

productsArr.forEach(product => {

    productsGalery.append(product);
});