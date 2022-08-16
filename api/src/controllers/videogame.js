require('dotenv').config();
const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;

async function findVideogame (req, res, next) {
    try {
        // DATABASE -> GET /videogame/id
        const { id } = req.params;
        if (id.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')) {
            let database = await Videogame.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Genre
                }
            });
            database = JSON.stringify(database);
            database = JSON.parse(database);
            database.genres = database.genres.map((g) => g.name);
            res.send(database)
        } else {
            // API -> GET /videogame/id
            let api = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
            res.send({
                id: api.id,
                name: api.name,
                description: api.description_raw,
                released: api.released,
                rating: api.rating,
                platforms: api.platforms.map((p) => p.platform.name),
                background_image:api.background_image,
                genres: api.genres.map((g) => g.name)
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findVideogame
}