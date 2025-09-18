const jwt = require("jsonwebtoken");

// POST for /api/v1/logon
const logon = (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res
      .status(400)
      .json({ message: "Please provide name and password" });
  }

  try {
    const token = jwt.sign({ name }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME || "24h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
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
