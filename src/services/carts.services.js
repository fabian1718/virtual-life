const Carts = require("../models/carts.models");

class Cartservices {
    static async getAll() {
        try {
            const result = await Carts.findAll(); // select * Carts
            return result;
        } catch (error) {
            throw(error);
        }
    }
    
    static async createCarts(id) {
        try {
            const result = await Carts.create({
                userId: id,
                totalPrice: 0
            }); // select * Carts
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = Cartservices;