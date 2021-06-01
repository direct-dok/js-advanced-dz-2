const products = [
        {id: 1, title: 'Notebook', price: 2000},
        {id: 2, title: 'Mouse', price: 20},
        {id: 3, title: 'Keyboard', price: 200},
        {id: 4, title: 'Gamepad', price: 50},
    ];

class ProductsList {

    constructor(container) {
        this.priceOfGoods = null;
        this.container = container;
    }

    _getProducts() { // Функция из которой по идее будет идти запрос на сервер для получения товаров, просто не очень красиво смотрится, когда массив с товарами лежит в классе

        // Какая то логика по получению необходимого количества товаров с сервера и обработка ответа...
        // ...
        // На самом деле не знаю как в реальных магазинах получают товары, но предполагаю, что подобным образом
        return products;
    }

    renderingOfGoods() {
        let goodsContainer = document.querySelector(this.container);
        let goodsList = this._getProducts();
        goodsList.forEach(el => {
            let goods = new TemplateProduct(el); // Создаем экземляр класса TemplateProduct
            goodsContainer.insertAdjacentHTML('beforeend', goods.preparationOfGoods()); // Добавляем HTML разметку каждого товара на страницу, путем вызова метода preparationOfGoods()
        });

        return true;
    }

    calculationPriceOfGoods() {
        let allGoods = this._getProducts();
        allGoods.forEach(el => {
            this.priceOfGoods += el.price;
        })

        return this.priceOfGoods;
    }

}


class TemplateProduct {

    constructor(product) {
        this.product = product;
    }

    preparationOfGoods() {
        return `<div class="products__item">
                        <div class="products__img-wrapper">
                            <img src="img/${this.product.title}.jpg" class="products__img" alt="${this.product.title}">
                        </div>
                        <div class="products__wrapper-info">
                            <h3 class="products__title">${this.product.title}</h3>
                            <p class="products__price">${this.product.price}</p>
                            <button class="products__buy-btn">Купить</button>
                        </div>
                    </div>`;
    }

}

let prod = new ProductsList('.products__wrapper');

prod.renderingOfGoods();
alert("Общая стоимость товаров - " + prod.calculationPriceOfGoods());
console.log("Общая стоимость товаров - " + prod.priceOfGoods);



class Cart { // Класс корзины

    renderOfGoods() { // Метод отрисовывающий товары в корзине

    }

    totalValueOfGoods() { // Метод рассчитывающий общую стоимость товаров в корзине

    }

    calculateDiscount() { // Метод рассчитывающий скидку по промокоду на все товары

    }

    checkout() { // Метод для оформления заказа

    }
}

class CartProduct { // Класс товара находящегося в корзине

    changeQuantityOfGoods() { // Метод изменяющий количество единиц конкретного товара 1, 2, 3 и т.д.

    }

    deleteItem() { // Метод удаляющий товар из корзины

    }

}

class ContactData { // Класс отвечающий за контактные данные покупателя

    renderContactForm() { // Метод отрисовывающий форму для заполнения контактов покупателя

    }

    validationContactForm() { // Метод для валидации введенных в форму данных

    }

}

class Delivery { // Класс отвечающий за доставку и получения товара

    renderMap() { // Метод отрисовывающий карту города клиента, и нахождение пунктов выдачи

    }

    deliveryMethod() { // Метод отвечающий за выбор способа доставки (курьер самовывоз)

    }

    placeOfIssue() { // Метод отвечающий за выввод пунктов выдачи

    }

}

class Payment { // Класс отвечающий за оплату товара
    
    paymentMethod() { // Метод отвечающий за способ оплаты товара

    }

}