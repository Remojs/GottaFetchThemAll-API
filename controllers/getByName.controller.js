const pokemonSchema = require('../models/pokemon.model')

const getAllPokemons = async (name) => {
    try{ 
        pokes = await pokemonSchema.find({name: name}).exec()
        return pokes
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getAllPokemons