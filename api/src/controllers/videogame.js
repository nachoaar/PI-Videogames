const axios = require('axios');
const { Videogame, Genre } = require('../db')

async function getAllVideogames () {
    try {
        // DATABASE
        let requestDb = await Videogame.findAll({
            include: {
                model: Genre
            }
        })
        let database = requestDb.map((videogame) => {
            let videogames = videogame.dataValues
            return {
                id: videogames.id,
                name: videogames.name,
                background_image: videogames.background_image,
                genres: videogames.genres.map((genre) => genre.name)
            }
        })
        // API (realizo un request de los 100 videogames)
        let url = `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
        let api = []
        for (let i = 0; i < 5; i++) {
            let videogames = (await axios.get(url)).data;
            url = videogames.next;
            videogames.results.forEach((videogames) => {
                api.push({
                    id: videogames.id,
                    name: videogames.name,
                    background_image: videogames.background_image,
                    genres: videogames.genres.map((genre) => genre.name)
                })
            });
        }
        // uno los datos de api y database para enviarlos juntos
        return [...api, database].flat();
    } catch (error) {
        throw new Error(error)
    }
}

async function getVideogameQuery () {
    console.log('listo query');

    return ('listo query');
}

async function getVideogamesId (req, res, next) {
    console.log('listo id');
    res.send('listo id')
}

async function postVideogame (req, res, next) {
    try {
        const {name, description, released, rating, platforms, background_image, createInDb, genres} = req.body
        let videogame = await Videogame.create({name, description, released, rating, platforms, background_image, createInDb})
        let genre = await Genre.findAll({
            where: { name: genres }
        })
        videogame.addGenre(genre)
        res.send('Personaje creado con éxito')
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllVideogames,
    getVideogameQuery,
    getVideogamesId,
    postVideogame
}