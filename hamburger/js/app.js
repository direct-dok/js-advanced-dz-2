class Form {

    constructor(selector) {
        this.selector = selector;
        this.allInputForm = null;
        this.arrChekedField = [];
        this.totalPrice = 0;
        this.totalCalory = 0;

    }

    getInput() {

        let elem = document.querySelector(this.selector);
        this.allInputForm = elem.querySelectorAll('input');

        this._filterInputValue();
        
        return true;
    }

    _filterInputValue() {

        this.allInputForm.forEach(input => input.checked ? this.arrChekedField.push(input) : false);
        this._calculateInputValue();

        return true;
    }

    _calculateInputValue() {

        this.arrChekedField.forEach(input => {
    
            this.totalPrice += +input.dataset.price;
            this.totalCalory += +input.dataset.calory;

        });

        this._renderParamOrder()
        return true;
    }

    _renderParamOrder() {

        document.querySelector('.result__value--total-price').innerHTML = this.totalPrice;
        document.querySelector('.result__value--total-calory').innerHTML = this.totalCalory;

        return true;
    }

}


let hamburgerForm = document.querySelector('.hamburger');
hamburgerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let formes = new Form('.hamburger');
    formes.getInput();
})

