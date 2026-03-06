const pokemonSchema = require('../models/pokemon.model')

const GEN_RANGES = {
    '1': [1, 151],
    '2': [152, 251],
    '3': [252, 386],
    '4': [387, 494],
    '5': [495, 649],
    '6': [650, 721],
    '7': [722, 809],
    '8': [810, 905],
    '9': [906, 1010],
};

const getByGen = async (gen) => {
    try {
        if (!GEN_RANGES[gen]) throw new Error('Invalid generation');
        const [minId, maxId] = GEN_RANGES[gen];
        const pokes = await pokemonSchema.find({ ID: { $gte: minId, $lte: maxId } }).sort({ ID: 1 }).lean();
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = getByGen