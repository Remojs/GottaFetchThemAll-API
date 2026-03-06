const pokemonSchema = require('../models/pokemon.model')

const getByDualType = async (first, second) => {
    try {
        const pokes = await pokemonSchema.find({
            $or: [
                { first_type: first, second_type: second },
                { first_type: second, second_type: first }
            ]
        }).sort({ ID: 1 }).lean();
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = getByDualType
