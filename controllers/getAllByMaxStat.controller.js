const pokemonSchema = require('../models/pokemon.model')

const STAT_MAP = {
    hp: 'stats.hp',
    attack: 'stats.attack',
    defense: 'stats.defense',
    special_attack: 'stats.special_attack',
    special_defense: 'stats.special_defense',
    speed: 'stats.speed'
};

const getAllByMaxStat = async (stat) => {
    try {
        const selectedStat = STAT_MAP[stat];
        if (!selectedStat) throw new Error('Invalid stat');
        const pokes = await pokemonSchema.find().sort({ [selectedStat]: -1 }).lean();
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = getAllByMaxStat