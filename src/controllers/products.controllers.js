const ProductsServices = require("../services/products.services");

const getByIdProducts = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await ProductsServices.getAll(id);
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

const createProduct = async (req, res, next) =>{
    try {
        const newProduct = req.body;
        const result = await ProductsServices.createProduct(newProduct);
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
    getByIdProducts,
    createProduct
}