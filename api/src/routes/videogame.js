const { Router } = require("express");
const { findVideogame } = require("../controllers/videogame");
const router = Router();

router.use("/:id", findVideogame);

module.exports = router;
