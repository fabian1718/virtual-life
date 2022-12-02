const OrderServices = require("../services/orders.services");

const getAllOrders = async (req, res, netx) =>{
    try {
        const result = await OrderServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        netx(error);
    }
}

const createOrders = async (req, res, netx) =>{
    try {
        const newOrder = req.body;
        const result = await OrderServices.createOrders(newOrder);
        res.status(201).json(result);
    } catch (error) {
        netx(error);
    }
}

module.exports = {
    getAllOrders,
    createOrders,
}