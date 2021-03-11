const express = require('express')
const router = express.Router();
const exchangeController = require("./controllers/exchangeController");

router.get("/", exchangeController);

module.exports = router;

