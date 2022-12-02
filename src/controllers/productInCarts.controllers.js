const productInCartsServices = require("../services/productInCarts.services");
const Carts = require("../models/carts.models");

const addProductsToCart = async (req, res, next) =>{
    try {
        const newProduct = req.body;
        const result = await productInCartsServices.addProductInCart(newProduct);
        // const totalPrice = await Carts.update(result.id, result.price, result.quantity)
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal",
        }
    );
    }
}

const getProductsToCart = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await productInCartsServices.getAll(id);
        res.json(result);
    } catch (error) {
        next({
                status: 400,
                errorContent: error,
                message: "Algo salio mal",
            }
        );
    }
}

module.exports = {
    addProductsToCart,
    getProductsToCart
}