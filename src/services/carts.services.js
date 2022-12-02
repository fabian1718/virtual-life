const Carts = require("../models/carts.models");
const Users = require("../models/users.models");

class Cartservices {
    static async getAll(id) {
        try {
            const result = await Carts.findAll({
                where: {userId: id},
                attributes: ["totalPrice"],
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