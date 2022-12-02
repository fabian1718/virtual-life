const ProductInCarts = require('../models/productInCarts.models');
const Carts = require('../models/carts.models');

class productInCartServices {
    static async addProductInCart (newProduct) {
        try {
            const result = await ProductInCarts.create(newProduct); 
            return result;
        } catch (error) {
            throw(error);
        }
    }

}

module.exports = productInCartServices;