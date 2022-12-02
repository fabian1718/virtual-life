const Products = require("../models/products.models");
const ProductsInOrder = require("../models/productInOrders.models");
const Orders = require("../models/orders.models");
const Users = require("../models/users.models");

class ProductsServices {
    static async getAll(id) {
        try {
            const result = await Products.findAll({
                where: {userId: id},
                attributes: ["id", "name", "price", "availableQty"],
                include: {
                    model: Users,
                    attributes: ["userName"],

                } 
            }); 
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