const db = require("../utils/database");
const { DataTypes } = require("sequelize");

//para el POST
/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           example: nombre
 *         email:
 *           type: string
 *           example: nombre@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     register:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           example: nombre
 *         email:
 *           type: string
 *           example: nombre@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 */


const Users = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "user_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
