const productCards = [
    {
        id: 1,
        image: "../images/product-img1.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "1",
        pawns: "4",
        price: "30000",
        inStock: true,
    },
    {
        id: 2,
        image: "../images/product-img2.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "3",
        pawns: "4",
        price: "40000",
        inStock: false,
    },
    {
        id: 3,
        image: "../images/product-img3.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "7",
        pawns: "4",
        price: "20000",
        inStock: true,
    },
    {
        id: 4,
        image: "../images/product-img1.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "9",
        pawns: "4",
        price: "20000",
        inStock: true,
    },
    {
        id: 5,
        image: "../images/product-img3.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "8",
        pawns: "4",
        price: "25000",
        inStock: true,
    },
    {
        id: 6,
        image: "../images/product-img2.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "3.5",
        pawns: "4",
        price: "10000",
        inStock: false,
    },
];


// console.log(products);

function createProduct() {
    const products = productCards.map((product) => {
        return `<li class="products__list__item">
                <div class="list__item-img">
                    <span class="like__svg"><img src="./images/like-image.svg" alt="like"></span>
                    <img 
                        src=${product.image}
                        width="380"
                        height="264"
                        alt="image"
                    />
                </div>
                <p class="list__item-title">${product.title}</p>
                <div class="list__item-info">
                    <p class="list__item-info_color">
                        ${product.color}
                    </p>
                    <div class="list__item-info_age">
                        <span><b>${product.age} мес.</b></span>
                        <span>Возраст</span>
                    </div>
                    <div class="list__item-info_pawns">
                        <span><b>${product.pawns}</b></span>
                        <span>Кол-во лап</span>
                    </div>
                </div>
                <p class="list__item-info_price">${product.price} руб.</p>
                ${
                    product.inStock
                        ? `<button class="list__item-info_btn">Купить</button>`
                        : `<button class="list__item-info_btn sold__out">Продан</button>`
                }
        </li>`;
    });

    products.forEach((product) => {
        document
            .querySelector(".products__list")
            .insertAdjacentHTML("beforeend", product);
    });
    return products;
}
createProduct();



function sortbyPrice() {
    const byPrice = productCards.slice(0);
    byPrice.sort((a, b) => {
        return a.price - b.price;
    });

    byPrice.forEach((product) => {
        document.querySelector(".products__list").innerHTML = product;
    });

    const sortedProducts = byPrice.map((product) => {
        return `<li class="products__list__item">
                <div class="list__item-img">
                    <span class="like__svg"><img src="./images/like-image.svg" alt="like"></span>
                    <img 
                        src=${product.image}
                        width="380"
                        height="264"
                        alt="image"
                    />
                </div>
                <p class="list__item-title">${product.title}</p>
                <div class="list__item-info">
                    <p class="list__item-info_color">
                        ${product.color}
                    </p>
                    <div class="list__item-info_age">
                        <span><b>${product.age} мес.</b></span>
                        <span>Возраст</span>
                    </div>
                    <div class="list__item-info_pawns">
                        <span><b>${product.pawns}</b></span>
                        <span>Кол-во лап</span>
                    </div>
                </div>
                <p class="list__item-info_price">${product.price} руб.</p>
                ${
                    product.inStock
                        ? `<button class="list__item-info_btn">Купить</button>`
                        : ` <button class="list__item-info_btn sold__out">Продан</button>`
                }
        </li>`;
    });

    sortedProducts.forEach((product) => {
        document
            .querySelector(".products__list")
            .insertAdjacentHTML("beforeend", product);
    });

    addToFavorites()
}

const sortbyPriceBtn = document
    .querySelector(".content__header-price__sort")
    .addEventListener("click", sortbyPrice);



function sortbyAge() {
    const byAge = productCards.slice(0);
    byAge.sort((a, b) => {
        return a.age - b.age;
    });

    byAge.forEach((product) => {
        document.querySelector(".products__list").innerHTML = product;
    });
    
    const sortedProducts = byAge.map((product) => {
        return `<li class="products__list__item">
                <div class="list__item-img">
                    <span class="like__svg"><img src="./images/like-image.svg" alt="like"></span>
                    <img 
                        src=${product.image}
                        width="380"
                        height="264"
                        alt="image"
                    />
                </div>
                <p class="list__item-title">${product.title}</p>
                <div class="list__item-info">
                    <p class="list__item-info_color">
                        ${product.color}
                    </p>
                    <div class="list__item-info_age">
                        <span><b>${product.age} мес.</b></span>
                        <span>Возраст</span>
                    </div>
                    <div class="list__item-info_pawns">
                        <span><b>${product.pawns}</b></span>
                        <span>Кол-во лап</span>
                    </div>
                </div>
                <p class="list__item-info_price">${product.price} руб.</p>
                ${
                    product.inStock
                        ? `<button class="list__item-info_btn">Купить</button>`
                        : ` <button class="list__item-info_btn sold__out">Продан</button>`
                }
        </li>`;
    });

    sortedProducts.forEach((product) => {
        document
            .querySelector(".products__list")
            .insertAdjacentHTML("beforeend", product);
    });

    addToFavorites()
}

const sortbyAgeBtn = document
    .querySelector(".content__header-age__sort")
    .addEventListener("click", sortbyAge);


function addToFavorites() {
    const likeBtns = document.querySelectorAll('.like__svg')

    likeBtns.forEach(btn =>  {
        btn.addEventListener('click', function() {
            this.innerHTML = `
                <img src="./images/like-image-yellow.png" width="46" height="46" alt="like">
                <span style="
                    position: absolute;
                    color: #fff;
                    top: 50px;
                    right: -24px;
                ">Добавленно<br>в избранное</br</span>
            `;
            
        })
    })
}

addToFavorites()


function showMobileMenu() {
    document.querySelector('.mobile__menu').addEventListener('click', () => {
        document.querySelector('.site__navigation').classList.toggle('active__menu')
        console.log('fired');
    })
}
showMobileMenu()