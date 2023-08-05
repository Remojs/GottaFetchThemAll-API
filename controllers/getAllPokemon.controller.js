const pokemonSchema = require('../models/pokemon.model')

const getAllPokemons = async (query) => {
    try{
        pokes = await pokemonSchema.find(query).sort({ ID: 1 })
        return pokes
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getAllPokemons