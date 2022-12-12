const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const pokemonSchema = new Schema({ 
    ID: {
        type: 'number',
        required: true
    },
    name: {
        type: 'string',
        required: true
    },
    image: {
        type: 'string',
        required: true
    },
    first_type: {
        type: 'string',
        required: true
    },
    second_type: {
        type: 'string',
        required: false
    },
    ability: {
        type: 'string',
        required: true
    },
    height: {
        type: 'string',
        required: true
    },
    weight: {
        type: 'string',
        required: true
    },    
    stats: {
        hp: {
            type: 'number',
            required: true
        },
        attack: {
            type: 'number',
            required: true
        },
        defense: {
            type: 'number',
            required: true
        },
        special_attack: {
            type: 'number',
            required: true
        },
        special_defense: {
            type: 'number',
            required: true
        },
        speed: {
            type: 'number',
            required: true
        },
    },
});

const Pokemon = mongoose.model('pokemon', pokemonSchema)

module.exports = Pokemon;