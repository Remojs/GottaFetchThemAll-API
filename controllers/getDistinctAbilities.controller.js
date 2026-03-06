const pokemonSchema = require('../models/pokemon.model')

const getDistinctAbilities = async () => {
    try {
        const abilities = await pokemonSchema.distinct('ability');
        return abilities.filter(Boolean).sort();
    } catch (error) {
        throw error;
    }
}

module.exports = getDistinctAbilities
