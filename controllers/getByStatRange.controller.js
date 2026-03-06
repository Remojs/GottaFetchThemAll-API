const pokemonSchema = require('../models/pokemon.model')

const STAT_MAP = {
    hp: 'stats.hp',
    attack: 'stats.attack',
    defense: 'stats.defense',
    special_attack: 'stats.special_attack',
    special_defense: 'stats.special_defense',
    speed: 'stats.speed'
};

const getByStatRange = async (stat, min, max) => {
    try {
        const selectedStat = STAT_MAP[stat];
        if (!selectedStat) throw new Error('Invalid stat');

        const filter = {};
        if (min !== undefined) filter[selectedStat] = { ...filter[selectedStat], $gte: parseInt(min) };
        if (max !== undefined) filter[selectedStat] = { ...filter[selectedStat], $lte: parseInt(max) };

        const pokes = await pokemonSchema.find(filter).sort({ [selectedStat]: 1 }).lean();
        return pokes;
    } catch (error) {
        throw error;
    }
}

module.exports = getByStatRange
