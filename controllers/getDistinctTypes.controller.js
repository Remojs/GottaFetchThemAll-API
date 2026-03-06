const pokemonSchema = require('../models/pokemon.model')

const getDistinctTypes = async () => {
    try {
        const [firstTypes, secondTypes] = await Promise.all([
            pokemonSchema.distinct('first_type'),
            pokemonSchema.distinct('second_type')
        ]);
        const allTypes = [...new Set([...firstTypes, ...secondTypes].filter(Boolean))].sort();
        return allTypes;
    } catch (error) {
        throw error;
    }
}

module.exports = getDistinctTypes
