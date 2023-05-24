const express = require("express");
const router = express.Router();

const accountController = require("../controller/accountController");

router.get("/get", accountController.getAccountData);

router.post("/post", accountController.postAccountData);

module.exports = router;
