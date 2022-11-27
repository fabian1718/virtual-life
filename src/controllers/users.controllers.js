const UserServices = require("../services/users.services");

const getAllUsers = async (req, res) =>{
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createUsers = async (req, res) =>{
    try {
        const newUser = req.body;
        const result = await UserServices.createUsers(newUser);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    createUsers,
}