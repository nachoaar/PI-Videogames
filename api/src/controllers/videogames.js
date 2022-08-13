require('dotenv').config();
const axios = require('axios');
const { Videogame, Genre } = require('../db')
const { API_KEY } = process.env;

async function getVideogames (req, res, next) {
    try {
        // DATABASE 
        let database = await Videogame.findAll({
            include: {
                model: Genre
            }
        });
        database = JSON.stringify(database);
        database = JSON.parse(database);
        //QUERY -> GET /videogames?name="..."
        const { name } = req.query;
        if (name) {
            let apiQuery = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results;
            let dbQuery = database.filter(v => v.name.toLowerCase().includes(name.toLowerCase().replace(/["']/g, "")));
            let videogames = [...dbQuery, ...apiQuery.splice(0, 15)].flat();
            if (videogames.length > 0) {
                const result = videogames.map((v) => {
                    return {
                        id: v.id,
                        name: v.name,
                        background_image: v.background_image,
                        rating: v.rating,
                        genres: v.genres.map((g) => g.name)
                    }
                });
                res.status(200).send(result);
            } else {
                return res.status(400).json(`El juego "${name}" no fue encontrado`);
            }
        } else {
        // ALL -> GET /videogames
            let url = `https://api.rawg.io/api/games?key=${API_KEY}`;
            let api = [];
            // let platformas = new Set();
            for (let i = 0; i < 5; i++) {
                let request = (await axios.get(url)).data;
                url = request.next;
                request.results.forEach((v) => {
                    api.push(v);
                    // v.platforms.forEach((p) => platformas.add(p.platform.name))
                });
            }
            let videogames = [...database, ...api].flat();
            const result = videogames.map((v) => {
                return {
                    id: v.id,
                    name: v.name,
                    background_image: v.background_image,
                    rating: v.rating,
                    genres: v.genres.map((g) => g.name),
                    createdInDb: v.createdInDb
                }
            });
            res.status(200).send(result);
        }
    } catch (error) {
        next(error);
    }
}

async function postVideogame (req, res, next) {
    try {
        // POST -> POST /videogames <-
        const {name, description, released, rating, platforms, background_image, genres} = req.body;    
        let genre = await Genre.findAll({
            where: { name: genres }
        });
        if (name && description && platforms && genres && genre.length > 0) {
            let videogame = await Videogame.create({name, description, released, rating, platforms, background_image});
            videogame.addGenre(genre);
            res.send(videogame);
        } else {
            res.status(400).json(`Datos obligatorios faltantes`)
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getVideogames,
    postVideogame
}