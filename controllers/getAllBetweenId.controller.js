const pokemonSchema = require('../models/pokemon.model')

const getAllBetween = async (min, max) => {
    try {
        const minId = parseInt(min);
        const maxId = parseInt(max);
        if (isNaN(minId) || isNaN(maxId)) throw new Error('min and max must be valid numbers');
        const pokes = await pokemonSchema.find({ ID: { $gte: minId, $lte: maxId } }).sort({ ID: 1 }).lean();
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = getAllBetween