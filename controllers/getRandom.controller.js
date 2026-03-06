const pokemonSchema = require('../models/pokemon.model')

const getRandom = async (count = 1) => {
    try {
        const pokes = await pokemonSchema.aggregate([{ $sample: { size: count } }]);
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = getRandom
