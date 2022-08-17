const { Router } = require("express");
const { getGenres } = require("../controllers/genres");
const router = Router();

router.use("/", getGenres);

module.exports = router;
