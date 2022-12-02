const CartServices = require("../services/carts.services");


const getAllCarts = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await CartServices.getAll(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal",
        }
    );
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