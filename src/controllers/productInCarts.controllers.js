const productInCartsServices = require("../services/productInCarts.services");
const Carts = require("../models/carts.models");
const addProductsToCart = async (req, res, next) =>{
    try {
        const newProduct = req.body;
        // const idn = await Carts.findOne({id: 1})
        // const {id} = idn;
        // console.log(id);
        // newProduct.cartId = id;
        const result = await productInCartsServices.addProductInCart(newProduct); 
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

module.exports = {
    addProductsToCart
}