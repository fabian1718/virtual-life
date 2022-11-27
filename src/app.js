const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const userRoutes = require('./Routes/users.routes');
const productRoutes = require('./Routes/products.routes');
const cartRoutes = require('./Routes/carts.routes');
const orderRoutes = require('./Routes/orders.routes');

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log("Bienvenido al server");
});

app.use('/api/v1', userRoutes);

app.use('/api/v1', productRoutes);

app.use('/api/v1', cartRoutes);

app.use('/api/v1', orderRoutes);

app.use(handleError);

module.exports = app;
