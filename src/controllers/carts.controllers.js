const CartServices = require("../services/carts.services");


const getAllCarts = async (req, res, next) =>{
    try {
        const result = await CartServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const addProductsToCart = async (req, res, next) =>{
    try {
        const addProducts = req.body;
        const result = await productInCartsServices.addProductInCart(addProducts);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllCarts,
    addProductsToCart,
}