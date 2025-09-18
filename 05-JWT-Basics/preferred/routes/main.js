const express = require("express");
const router = express.Router();

const { logon, sayHello } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");

router.post("/logon", logon);
router.get("/hello", authMiddleware, sayHello);

module.exports = router;
