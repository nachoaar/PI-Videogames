const { Router } = require('express');
const { getAllGenres } = require('../controllers/genre');
const router = Router();

router.use('/', async (req, res, next) => {
    try {
        const genres = await getAllGenres()
        res.send(genres)
    } catch (error) {
        next(error)  
    }
})

module.exports = router;