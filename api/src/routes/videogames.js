const { Router } = require('express');
const { getAllVideogames, getVideogameQuery, getVideogamesId, postVideogame } = require('../controllers/videogame');
const { Genre } = require('../db')

const router = Router();

router.get('/', async (req, res, next) => {  
    try {
        const {name} = req.query  
        if(name === undefined) {
            const videogames = await getAllVideogames()
            res.status(200).json(videogames)
        } else {
            const videogamesQuery = await getVideogameQuery(name.toLocaleLowerCase())
            res.status(200).json(videogamesQuery)
        }
    } catch (error) {
        next(error)
    }
})

router.get('/:id', getVideogamesId) 

router.post('/', postVideogame)


module.exports = router;