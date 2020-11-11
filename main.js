
// Данные карточек товара
const goods = [
    {
        id: 1,
        image: "../images/product-img1.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "1",
        pawns: "4",
        price: 30000,
        inStock: true,
        discount: 40,
    },
    {
        id: 2,
        image: "../images/product-img2.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "3",
        pawns: "4",
        price: 40000,
        inStock: false,
        discount: null,
    },
    {
        id: 3,
        image: "../images/product-img3.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "7",
        pawns: "4",
        price: 20000,
        inStock: true,
        discount: null,
    },
    {
        id: 4,
        image: "../images/product-img1.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "9",
        pawns: "4",
        price: 20000,
        inStock: true,
        discount: null,
    },
    {
        id: 5,
        image: "../images/product-img3.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "8",
        pawns: "4",
        price: 25000,
        inStock: true,
        discount: 40,
    },
    {
        id: 6,
        image: "../images/product-img2.png",
        title: "Кот полосатый",
        color: "Коричневый окрас",
        age: "3.5",
        pawns: "4",
        price: 10000,
        inStock: false,
        discount: null,
    },
];

// Список товаров
const productsList = document.querySelector(".products__list");


// Отрисовка на экране
init();

function init() {
    const cards = createCards(goods);
    productsList.insertAdjacentHTML("beforeend", cards.join(""));

    document
        .querySelector(".content__header-price__sort")
        .addEventListener("click", sortByPrice);

    document
        .querySelector(".content__header-age__sort")
        .addEventListener("click", sortByAge);

    addToFavorites();
}

// Создаем верстку карточек товара

function createCards(array) {
    return array.map(
        (product) => `<li class="products__list__item">
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
                ${
                    product.discount
                        ? `<span style="
                            display: block;
                            position: absolute;
                            top: 36px;
                            left: 25px;
                            color: #fff;
                            background: red;
                            width: 78px;
                            height: 39px;
                            border-radius: 10px;
                            font-size: 16px;
                            line-height: 20px;
                            padding-top: 8px;
                        ">-${product.discount}%</span>`
                        : ""
                }
        </li>`,
    );
}

// Сортировка по цене

function sortByPrice() {
    const currentGoods = goods.sort((a, b) => a.price - b.price);
    const cards = createCards(currentGoods);

    productsList.innerHTML = "";
    productsList.insertAdjacentHTML("beforeend", cards);
}

// Сортировка по возрасту 

function sortByAge() {
    const currentGoods = goods.sort((a, b) => a.age - b.age);
    const cards = createCards(currentGoods);

    productsList.innerHTML = "";
    productsList.insertAdjacentHTML("beforeend", cards);
}

// Добавление в избанное (информация о добавлении + смена цвета иконки)

function addToFavorites() {
    const likeBtns = document.querySelectorAll(".like__svg");

    likeBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.innerHTML = `
                    <img src="./images/like-image-yellow.png" width="46" height="46" alt="like">
                        <span style="
                        position: absolute;
                        color: #fff;
                        top: 50px;
                        right: -24px;
                    ">Добавленно<br>в избранное</br</span>
                `;

            setTimeout(() => {
                this.innerHTML = `
                    <img src="./images/like-image-yellow.png" width="46" height="46" alt="like">
                `;
            }, 2000);
        });
    });
}


// Показать\Скрыть меню на мобилке 

function showMobileMenu() {
    document.querySelector(".mobile__menu").addEventListener("click", () => {
        document
            .querySelector(".site__navigation")
            .classList.toggle("active__menu");
        console.log("fired");
    });
}
showMobileMenu();


// Скролл 

const scrollBtn = document
    .querySelector(".scroll__up-btn")
    .addEventListener("click", scrollUp);

window.addEventListener("scroll", function () {
    const scrollElem = document.querySelector(".scroll__up-btn");

    if (document.body.scrollTop > document.documentElement.clientHeight) {
        scrollElem.style.display = "block";
    } else {
        scrollElem.style.display = "block";
    }
});

let timeOut;

function scrollUp() {
    let top = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
    );

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}
