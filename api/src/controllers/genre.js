const axios = require('axios');
const { Genre } = require('../db')

async function getAllGenres () {
    try {
        let genres = (await axios(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)).data.results
        .map((genre) => {
            return {
                name: genre.name
            }
        })
        genres.forEach( async (t) => {
            await Genre.findOrCreate({
                where: {
                    name: t.name
                }
            })
        })

        console.log("Genres cargados en Database correctamente")

        let find = await Genre.findAll()

        return find;

    } catch (error) {
        throw new Error('No se encontraron los generos')
    }
}

module.exports = {
    getAllGenres
}