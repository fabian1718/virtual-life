
const Carts = require('./carts.models');
const Orders = require('./orders.models');
const ProductInCarts = require('./productInCarts.models');
const ProductInOrders = require('./productInOrders.models');
const Products = require('./products.models');
const Users = require('./users.models');

const initModels = () => {

    // realacion 1 a muchos Users - Products
    Products.belongsTo(Users);
    Users.hasMany(Products);

    //Relacion 1 a 1 User - Carts
    Carts.belongsTo(Users);
    Users.hasOne(Carts);

    // realacion 1 a muchos Users - Ordes
    Orders.belongsTo(Users);
    Users.hasMany(Orders);

    // realacion 1 a muchos Products - ProductInCarts
    ProductInCarts.belongsTo(Products);
    Products.hasMany(ProductInCarts);

    // realacion 1 a muchos Carts - ProductInCarts
    ProductInCarts.belongsTo(Carts);
    Carts.hasMany(ProductInCarts);

    //realacion 1 a muchos Products - ProductInOrders
    ProductInOrders.belongsTo(Products);
    Products.hasMany(ProductInOrders);

    //realacion 1 a muchos Orders - ProductInOrders
    ProductInOrders.belongsTo(Orders);
    Orders.hasMany(ProductInOrders);

    // Carts,
    // Orders,
    // ProductInCarts,
    // ProductInOrders,
    // Products,
    // Users
}

module.exports = initModels;