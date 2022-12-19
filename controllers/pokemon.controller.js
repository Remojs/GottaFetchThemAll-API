const Pokemon = require('../models/pokemon.model');

class pokemonControllers {

    async findAll(){
        try {
            return await Pokemon.find().sort({ ID : 1 }).lean();
        } catch (error) {
            throw error
        }
    }

    async create(pokemon){
        try {
            return await Pokemon.create(pokemon);
        } catch (error) {
            throw error
        }
    }

    async delete(id){
        try {
            return await Pokemon.findByIdAndDelete(id);
        } catch (error) {
            throw error
        }
    }

    async update(id){
        try {
            return await Pokemon.findByIdAndUpdate(id);
        } catch (error) {
            throw error
        }
    }
}

module.exports = new pokemonControllers;