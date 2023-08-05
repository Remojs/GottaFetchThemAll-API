const pokemonSchema = require('../models/pokemon.model')

const getAllByMinStat = async (stat) => {
    try{ 
        let selectedStat
        if(stat === 'hp'){selectedStat = 'stats.hp'}
        else if(stat === 'attack'){selectedStat = 'stats.attack'}
        else if(stat === 'defense'){selectedStat = 'stats.defense'}
        else if(stat === 'special_attack'){selectedStat = 'stats.special_attack'}
        else if(stat === 'special_defense'){selectedStat = 'stats.special_defense'}
        else if(stat === 'speed'){selectedStat = 'stats.speed'}
        pokes = await pokemonSchema.find().sort({ [selectedStat]: 1 })
        return pokes
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getAllByMinStat