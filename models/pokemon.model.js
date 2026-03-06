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
            required: false,
            default: 0
        },
        attack: {
            type: 'number',
            required: false,
            default: 0
        },
        defense: {
            type: 'number',
            required: false,
            default: 0
        },
        special_attack: {
            type: 'number',
            required: false,
            default: 0
        },
        special_defense: {
            type: 'number',
            required: false,
            default: 0
        },
        speed: {
            type: 'number',
            required: false,
            default: 0
        },
    },
});

pokemonSchema.index({ ID: 1 }, { unique: true });
pokemonSchema.index({ name: 1 });
pokemonSchema.index({ first_type: 1 });
pokemonSchema.index({ second_type: 1 });
pokemonSchema.index({ ability: 1 });

const Pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = Pokemon;