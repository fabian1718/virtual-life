const Products = require("../models/products.models");

class ProductsServices {
    static async getAll() {
        try {
            const result = await Products.findAll(); 
            return result;
        } catch (error) {
            throw(error);
        }
    }
    
    static async createProduct(newProduct) {
        try {
            const result = await Products.create(newProduct); // select * users
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = ProductsServices;