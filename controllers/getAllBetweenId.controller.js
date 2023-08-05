const pokemonSchema = require('../models/pokemon.model')

const getAllBetween = async (min, max) => {
    try {
        const pokes = await pokemonSchema.find({ ID: { $gte: min, $lte: max } }).sort({ ID: 1 }).exec();
        return pokes;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

module.exports = getAllBetween