const { Router } = require("express");
const {
  getVideogames,
  postVideogame,
} = require("../controllers/videogames.js");
const router = Router();

router.get("/", getVideogames);

router.post("/", postVideogame);

module.exports = router;
