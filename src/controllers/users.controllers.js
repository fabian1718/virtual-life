const UserServices = require("../services/users.services");
const CartsServices = require("../services/carts.services")
const welcomeTemplate = require("../templates/welcome");
const transporter = require("../utils/mailer");


const getAllUsers = async (req, res, netx) =>{
    try {
        const offset = req.query.offset ?? 0;
        const limit = req.query.limit ?? 3;
        const result = await UserServices.getAll(offset, limit);
        res.status(200).json(result);
    } catch (error) {
        netx({
            status: 400,
            errorContent: error,
            message: "Algo salio mal",
          });
    }
}

const createUsers = async (req, res, netx) =>{
    try {
        const newUser = req.body;
        const result = await UserServices.createUsers(newUser);
        const cart = await CartsServices.createCarts(result.id);
        res.status(201).json(result);
        transporter.sendMail({
            from: "<fagodu5@gmail.com>",
            to: result.email,
            subject: "Bienvenido a Virtual Life",
            text: `Bienvenido ${result.userName} a la mejor tienda de tecnologia`,
            html: welcomeTemplate(result.userName)
        });
    } catch (error) {
        netx({status: 418, errorContent: error, message: "Revisa la información enviada"});
    }
}

module.exports = {
    getAllUsers,
    createUsers,
}