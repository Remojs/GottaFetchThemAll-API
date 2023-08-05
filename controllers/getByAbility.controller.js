const pokemonSchema = require('../models/pokemon.model')

const getByAbility = async (ability) => {
    try{ 
        pokes = await pokemonSchema.find({ability: ability}).exec()
        return pokes
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getByAbility