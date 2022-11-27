const db = require("../utils/database");
const { DataTypes } = require("sequelize");

//para el POST
/**
 * @openapi
 * components:
 *   schemas:
 *     carts:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         totalPrice:
 *           type: float
 *           example: 200000
 *     registerCarts:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         totalPrice:
 *           type: float
 *           example: 200000
 */


const Carts = db.define("carts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "total_price",
  },
});

module.exports = Carts;