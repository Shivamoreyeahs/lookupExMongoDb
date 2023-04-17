const express = require('express');
const app = express();
const morgan = require("morgan");


const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected too MongoDB..."))
  .catch((err) => console.error(err));


  app.use(morgan("tiny"));
console.log("Morgan was enabled...");


const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/',userRoutes);
app.use('/',productRoutes);



const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`Connecting to ${PORT} ...`);
});
