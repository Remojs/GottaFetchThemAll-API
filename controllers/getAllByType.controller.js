const pokemonSchema = require('../models/pokemon.model')

const VALID_TYPES = new Set([
    'normal','fire','water','grass','flying','fighting','poison',
    'electric','ground','rock','psychic','ice','bug','ghost',
    'steel','dragon','dark','fairy'
]);

const allByType = async (type) => {
    try {
        if (!VALID_TYPES.has(type)) throw new Error('Invalid type');
        const pokes = await pokemonSchema.find({
            $or: [{ first_type: type }, { second_type: type }]
        }).sort({ ID: 1 }).lean();
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = allByType