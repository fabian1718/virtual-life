const Carts = require('../models/carts.models');
const initModels = require('../models/initModels');
const Orders = require('../models/orders.models');
const ProductInCarts = require('../models/productInCarts.models');
const ProductInOrders = require('../models/productInOrders.models');
const Products = require('../models/products.models');
const Users = require('../models/users.models');
const db = require('../utils/database');

initModels();

const users = [
    { userName: "Fabian", email: "fabian@gmail.com", password: "1234" },
    { userName: "Alvis", email: "alvis@gmail.com", password: "0000" },
    { userName: "Karla", email: "karla@gmail.com", password: "54321" },
  ];

  const products = [
    {
      name: "Oculus Quest 2",
      price: 2000000,
      availableQty: 1,
      status: true,
      userId: 1,
    },
    {
      name: "Diadema bluethooth",
      price: 450000,
      availableQty: 2,
      status: true,
      userId: 2,
    },
    {
      name: "Battery Pack",
      price: 100000,
      availableQty: 3,
      status: true,
      userId: 3,
    },
  ];

  const orders = [
    {
      totalPrice: 2000000,
      userId: 1,
      status: true,
    },
    {
      totalPrice: 900000,
      userId: 2,
      status: true,
    },
    {
      totalPrice: 200000,
      userId: 3,
      status: true,
    },
  ];

  const carts = [
    {
      userId: 1,
      totalPrice: 2000000
    },
    {
      userId: 2,
      totalPrice: 900000
    },
    {
      userId: 3,
      totalPrice: 200000
    },
  ];

  const productInCarts = [
    {
      cartId: 1, 
      productId: 1,
      quantity: 1,
      price: 2000000,
      status: true, 
    },
    {
      cartId: 2, 
      productId: 2,
      quantity: 1,
      price: 900000,
      status: true, 
    },
    {
      cartId: 3, 
      productId: 3,
      quantity: 1,
      price: 200000,
      status: true, 
    },
  ];

  const productInOrders = [
    {
      orderId: 1, 
      productId: 1,
      quantity: 1,
      price: 2000000,
      status: true, 
    },
    {
      orderId: 2, 
      productId: 2,
      quantity: 1,
      price: 900000,
      status: true, 
    },
    {
      orderId: 3, 
      productId: 3,
      quantity: 1,
      price: 200000,
      status: true, 
    },
  ];

  db.sync({ force: true })
  .then(() => {
		console.log("Iniciando la plantación de Información");
		// información de usuarios
		users.forEach((user) => Users.create(user));
		setTimeout(() => {
			products.forEach((product) => Products.create(product));
		}, 100);
        setTimeout(() => {
      orders.forEach((order) => Orders.create(order));
		}, 200);
        setTimeout(() => {
      carts.forEach((cart) => Carts.create(cart));
		}, 300);
        setTimeout(() => {
      productInCarts.forEach((pc) => ProductInCarts.create(pc));
		}, 400);
    setTimeout(() => {
      productInOrders.forEach((po) => ProductInOrders.create(po));
		}, 500);
	})
	.catch((error) => console.log(error));