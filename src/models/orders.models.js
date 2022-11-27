const db = require("../utils/database");
const { DataTypes } = require("sequelize");

//para el POST
/**
 * @openapi
 * components:
 *   schemas:
 *     orders:
 *       type: object
 *       properties:
 *         totalPrice: 
 *           type: float
 *           example: 100000
 *         userId:
 *           type: integer
 *           example: 1
 *         status:
 *           type: boolean
 *           example: true
 *     registerOrders:
 *       type: object
 *       properties:
 *         totalPrice: 
 *           type: float
 *           example: 100000
 *         userId:
 *           type: integer
 *           example: 1
 *         status:
 *           type: boolean
 *           example: true
 */


const Orders = db.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "total_name",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Orders;