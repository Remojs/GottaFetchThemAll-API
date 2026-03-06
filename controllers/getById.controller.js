const pokemonSchema = require('../models/pokemon.model')

const getById = async (id) => {
    try {
        const numId = parseInt(id);
        if (isNaN(numId)) throw new Error('ID must be a valid number');
        const pokes = await pokemonSchema.find({ ID: numId }).lean();
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = getById