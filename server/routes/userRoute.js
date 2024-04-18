const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

//When a GET request is made to this route, the function 'getDatabase' from the controller module will be called
router.get("/:username", controller.getDatabase);

module.exports = router;
