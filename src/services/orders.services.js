const Orders = require("../models/orders.models");

class Orderservices {
    static async getAll() {
        try {
            const result = await Orders.findAll(); // select * Orders
            return result;
        } catch (error) {
            throw(error);
        }
    }
    
    static async createOrders(newOrder) {
        try {
            const result = await Orders.create(newOrder); // select * Orders
            return result;
        } catch (error) {
            throw(error);
        }
    }
}



module.exports = Orderservices;