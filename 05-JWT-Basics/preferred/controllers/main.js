const jwt = require("jsonwebtoken");
const { BadRequestError, InternalServerError } = require("../errors");

// POST for /api/v1/logon
const logon = (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    throw new BadRequestError("Please provide name and password");
  }

  try {
    const token = jwt.sign({ name }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME || "24h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    throw new InternalServerError("Something went wrong");
  }
};

// GET for /api/v1/hello
const sayHello = (req, res) => {
  res.status(200).json({ message: `Hello ${req.user.name}!` });
};

module.exports = {
  logon,
  sayHello,
};
