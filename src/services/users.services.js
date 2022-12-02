const Users = require("../models/users.models");

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll(); // select * users
            return result;
        } catch (error) {
            throw(error);
        }
    }
    
    static async createUsers(newUser) {
        try {
            const result = await Users.create(newUser); // select * users
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = UserServices;