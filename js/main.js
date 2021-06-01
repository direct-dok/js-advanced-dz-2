const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (title = "Название товара", price = 10) => 

        `<div class="products__item">
                <div class="products__img-wrapper">
                    <img src="img/${title}.jpg" class="products__img" alt="${title}">
                </div>
                <div class="products__wrapper-info">
                    <h3 class="products__title">${title}</h3>
                    <p class="products__price">${price}</p>
                    <button class="products__buy-btn">Купить</button>
                </div>
            </div>`;

const renderPage = list => list.forEach(item => document.querySelector('.products__wrapper').innerHTML += renderProduct(item.title, item.price));

renderPage(products);