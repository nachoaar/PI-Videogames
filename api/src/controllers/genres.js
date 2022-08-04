require('dotenv').config();
const axios = require('axios');
const { Genre } = require('../db')
const { API_KEY } = process.env;

async function createGenres () {
    try {
        // CREATE -> DATABASE GENRE
        let genres = (await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
        let result = genres.map((g) => {
            return {
                name: g.name
            }
        });
        result.forEach( async (g) => {
            await Genre.findOrCreate({
                where: {
                    name: g.name
                }
            });
        });
    } catch (error) {
        next(error);
    }
}

async function getGenres (req, res, next) {
    try {
        // ALL -> GET /genres
        let find = await Genre.findAll();
        res.status(200).send(find);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createGenres,
    getGenres
}