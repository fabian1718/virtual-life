//configurar el correo para cuenta de gmail
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: 'fagodu5@gmail.com',
        pass: process.env.G_PASSWORD
    }      
});

module.exports = transporter;