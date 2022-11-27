const CartServices = require("../services/carts.services");

const getAllCarts = async (req, res) =>{
    try {
        const result = await CartServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createCarts = async (req, res) =>{
    try {
        const newCart = req.body;
        const result = await CartServices.createCarts(newCart);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllCarts,
    createCarts,
}