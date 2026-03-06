const pokemonSchema = require('../models/pokemon.model')

const getByName = async (name) => {
    try {
        const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const pokes = await pokemonSchema.find({ name: { $regex: escaped, $options: 'i' } }).sort({ ID: 1 }).lean();
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = getByName