const pokemonSchema = require('../models/pokemon.model')

const getById = async (id) => {
    try{ 
        pokes = await pokemonSchema.find({ID: id}).exec()
        return pokes
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getById