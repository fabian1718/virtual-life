const ProductInCarts = require('../models/productInCarts.models');
const Users = require('../models/users.models');

class productInCartServices {
    static async addProductInCart (newProduct) {
        try {
            const result = await ProductInCarts.create(newProduct); 
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getAll(id) {
        try {
            const result = await ProductInCarts.findAll({
                where: {cartId: id},
                attributes: ["productId", "quantity", "price"],
            }); 
            return result;
        } catch (error) {
            throw(error);
        }
    }

    // static async update(id, price, quantity) {
    //     try {
    //         const price1 = parseFloat(price * quantity);
    //         const result = await ProductInCarts.update(price1, {
    //             where: {cartId: id},
    //             attributes: ["productId", "quantity", "price"],
    //         }); 
    //         return result;
    //     } catch (error) {
    //         throw(error);
    //     }
    // }

}

module.exports = productInCartServices;