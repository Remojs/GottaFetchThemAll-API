const pokemonSchema = require('../models/pokemon.model')

const getByAbility = async (ability) => {
    try {
        const escaped = ability.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const pokes = await pokemonSchema.find({ ability: { $regex: escaped, $options: 'i' } }).sort({ ID: 1 }).lean();
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = getByAbility