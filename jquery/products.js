const productsGalery = $(".products .galery");

let productsArr = [

    {
        name: 'apple',
        src: 'img/products/apple-min.png',
        price: 2.5

    },

    {
        name: 'cabbage',
        src: 'img/products/cabbage-min.png',
        price: 3

    },

    {
        name: 'carrot',
        src: 'img/products/carrot-min.png',
        price: 2.5

    },

    {
        name: 'cucumber',
        src: 'img/products/cucumber-min.png',
        price: 2.5

    },

    {
        name: 'onion',
        src: 'img/products/onion-min.png',
        price: 2.5

    },

    {
        name: 'juice',
        src: 'img/products/juice-min.png',
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