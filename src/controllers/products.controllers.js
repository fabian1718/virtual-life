const ProductsServices = require("../services/products.services");

const getAllProducts = async (req, res) =>{
    try {
        const result = await ProductsServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createProduct = async (req, res) =>{
    try {
        const newProduct = req.body;
        const result = await ProductsServices.createProduct(newProduct);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllProducts,
    createProduct
}