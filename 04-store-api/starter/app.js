require("dotenv").config();
// async errors
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1>");
});

app.use("/api/v1/products", productsRouter);

// end routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
