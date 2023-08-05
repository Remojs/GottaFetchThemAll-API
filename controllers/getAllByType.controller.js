const pokemonSchema = require('../models/pokemon.model')

const allByType = async (type) => {
    try {
        let selectedType
        if(type === 'normal'){selectedType = 'normal'}
        else if(type === 'fire'){selectedType = 'fire'}
        else if(type === 'water'){selectedType = 'water'}
        else if(type === 'grass'){selectedType = 'grass'}
        else if(type === 'flying'){selectedType = 'flying'}
        else if(type === 'fighting'){selectedType = 'fighting'}
        else if(type === 'poison'){selectedType = 'poison'}
        else if(type === 'electric'){selectedType = 'electric'}
        else if(type === 'ground'){selectedType = 'ground'}
        else if(type === 'rock'){selectedType = 'rock'}
        else if(type === 'psychic'){selectedType = 'psychic'}
        else if(type === 'ice'){selectedType = 'ice'}
        else if(type === 'bug'){selectedType = 'bug'}
        else if(type === 'ghost'){selectedType = 'ghost'}
        else if(type === 'steel'){selectedType = 'steel'}
        else if(type === 'dragon'){selectedType = 'dragon'}
        else if(type === 'dark'){selectedType = 'dark'}
        else if(type === 'fairy'){selectedType = 'fairy'}
        else throw new error
        const pokes = await pokemonSchema.find({first_type: selectedType}).sort({ ID: 1 }).exec();
        return pokes;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

module.exports = allByType