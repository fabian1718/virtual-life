const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const userRoutes = require('./routes/users.routes');
const productRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/carts.routes');
const orderRoutes = require('./routes/orders.routes');
const authRoutes = require('./routes/auth.routes');
const addProductRoutes = require("./routes/productInCarts.routes");

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
  res.json({
    message: "Bienvenido al a virtual life" 
  })
});

app.use('/api/v1', userRoutes);

app.use("/api/v1", authRoutes);

app.use('/api/v1', productRoutes);

app.use('/api/v1', cartRoutes);

app.use('/api/v1', orderRoutes);

app.use('/api/v1', addProductRoutes);

app.use(handleError);

module.exports = app;
