const db = require("../utils/database");
const { DataTypes } = require("sequelize");

//para el POST
/**
 * @openapi
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: nombreProduct
 *         price: 
 *           type: float
 *           example: 100000
 *         availableQty:
 *           type: integer
 *           example: 2
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: integer
 *           example: 1
 *     registerProducts:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: nombreProduct
 *         price: 
 *           type: float
 *           example: 100000
 *         availableQty:
 *           type: integer
 *           example: 2
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: integer
 *           example: 1
 */

const Products = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  availableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
});

module.exports = Products;