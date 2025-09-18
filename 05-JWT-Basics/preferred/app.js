require("dotenv").config();

const express = require("express");
const app = express();

const routes = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");

app.use(express.json());

// Start - Routes
app.get("/", (req, res) => {
  res.send("It Works!");
});

app.use("/api/v1", routes);
// End - Routes

app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(port, console.log(`http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
