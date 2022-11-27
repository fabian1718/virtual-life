const UserServices = require("../services/users.services");
const welcomeTemplate = require("../templates/welcome");
const transporter = require("../utils/mailer");


const getAllUsers = async (req, res) =>{
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createUsers = async (req, res) =>{
    try {
        const newUser = req.body;
        const result = await UserServices.createUsers(newUser);
        res.status(201).json(result);
        transporter.sendMail({
            from: "<fagodu5@gmail.com>",
            to: result.email,
            subject: "Bienvenido a Virtual Life",
            text: `Bienvenido ${result.userName} a la mejor tienda de tecnologia`,
            html: welcomeTemplate(result.userName)
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    createUsers,
}