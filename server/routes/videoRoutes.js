const express = require("express");
const router = express.Router();

const videoController = require("../controllers/videoController");

// Route pour la suppression d'une vidéo par ID
router.delete("/:id", videoController.deleteVideoById);

module.exports = router;
