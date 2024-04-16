const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

//When a GET request is made to "/", the function 'getDatabase' from the controller module will be called
router.get("/", controller.getDatabase);

module.exports = router;
