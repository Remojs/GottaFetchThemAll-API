const pokemonSchema = require('../models/pokemon.model')

const getAllPokemons = async (query, page = 1, limit = 100) => {
    try {
        const skip = (page - 1) * limit;
        const [pokes, total] = await Promise.all([
            pokemonSchema.find(query).sort({ ID: 1 }).skip(skip).limit(limit).lean(),
            pokemonSchema.countDocuments(query)
        ]);
        return { data: pokes, total, page, limit, pages: Math.ceil(total / limit) };
    } catch (error) {
        throw error;
    }
}

module.exports = getAllPokemons