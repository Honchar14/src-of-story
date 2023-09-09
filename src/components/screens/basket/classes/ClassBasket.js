class Basket {
    constructor() {
        this.productArr = this.restoreCartInfoFromStorage();
    }

    areProductEqual(product, otherProduct) {
        if (!product.hasOwnProperty('id') || !otherProduct.hasOwnProperty('id')) {
            return false;
        }
        if(!product.props || !otherProduct.props) {
            return product.id === otherProduct.id;
        }
        return product.id === otherProduct.id && product.props.size === otherProduct.props.size && product.props.color === otherProduct.props.color;
    }


    saveCartInfoIntoStorage() {
        localStorage.setItem('cart', JSON.stringify(this.productArr));
    }

    restoreCartInfoFromStorage() {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    }

    addToCart(product) {
        let existProduct = null;
        for (let i = 0; i < this.productArr.length; i++) {
            if (this.areProductEqual(this.productArr[i], product)) {
                existProduct = this.productArr[i];
                break;
            }
        }
        if (existProduct) {
            existProduct.quantity += 1;
        } else {
            this.productArr.push({...product, quantity: 1});
        }

        this.saveCartInfoIntoStorage();
        return this.productArr
    }

    deleteFromCard(product) {
        for (let i = 0; i < this.productArr.length; i++) {
            if (this.areProductEqual(this.productArr[i], product)) {
                this.productArr.splice(i, 1);
            }
        }

        this.saveCartInfoIntoStorage();
    }

    totalSum() {
        let totalPrice = 0;

        for (let i = 0; i < this.productArr.length; i++) {
            totalPrice += parseFloat(this.productArr[i].priceTotal);
        }

        return totalPrice;
    }

    increaseQuantity(productId) {
        for (let i = 0; i < this.productArr.length; i++) {
            if (this.areProductEqual(this.productArr[i], {id: productId})) {
                this.productArr[i].quantity += 1;
                console.log(this.productArr[i]);
                break
            }
        }
        this.saveCartInfoIntoStorage();
    }

    decreaseQuantity(productId) {
        for (let i = 0; i < this.productArr.length; i++) {
            if (this.areProductEqual(this.productArr[i], {id: productId}) && this.productArr[i].quantity > 1) {
                this.productArr[i].quantity -= 1;
                break;
            }
        }

        this.saveCartInfoIntoStorage();
    }
    getTotalSum = () => {
        let totalSum = 0;
        for (const product of this.productArr) {
            totalSum += parseFloat(product.quantity) * parseFloat(product.price);
        }
        return totalSum;
    };
    getTotalQuantity = (product) => {
        let totalQuantity = 0;
        for (product of this.productArr) {
            totalQuantity += product.quantity;
        }
        return totalQuantity;
    };
}

export default Basket
export const globalBasket = new Basket();