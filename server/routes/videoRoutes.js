const express = require("express");
const router = express.Router();

const videoController = require("../controllers/videoController");

// Delete a video from the database by its id
router.delete("/:id", videoController.deleteVideoById);

module.exports = router;
