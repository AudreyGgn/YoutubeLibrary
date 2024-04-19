const express = require("express");
const router = express.Router();

const videoController = require("../controllers/videoController");

// Delete a video from the database by its id
router.delete("/:id/:username", videoController.deleteVideoById);

module.exports = router;
