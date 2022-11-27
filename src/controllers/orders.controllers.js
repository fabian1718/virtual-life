const OrderServices = require("../services/orders.services");

const getAllOrders = async (req, res) =>{
    try {
        const result = await OrderServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createOrders = async (req, res) =>{
    try {
        const newOrder = req.body;
        const result = await OrderServices.createOrders(newOrder);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllOrders,
    createOrders,
}