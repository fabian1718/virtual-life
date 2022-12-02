const db = require("../utils/database");
const { DataTypes } = require("sequelize");

//para el agregar productos
/**
 * @openapi
 * components:
 *   schemas:
 *     add:
 *       type: object
 *       properties:
 *         cartId:
 *           type: integer
 *           example: 1
 *         productId:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 10
 *         price:
 *           type: float
 *           example: 200000
 *     registerAdd:
 *       type: object
 *       properties:
 *         cartId:
 *           type: integer
 *           example: 1
 *         productId:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 10
 *         price:
 *           type: float
 *           example: 200000
 */

const ProductInCarts = db.define("productInCarts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "cart_id",
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "product_id",
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = ProductInCarts;