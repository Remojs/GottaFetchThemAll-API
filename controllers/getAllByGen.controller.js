const pokemonSchema = require('../models/pokemon.model')

const getByGen = async (gen) => {
    try {
        let minId, maxId

        if(gen === '1'){ minId = 1; maxId = 151; }
        else if(gen === '2'){ minId = 152; maxId = 251; }
        else if(gen === '3'){ minId = 252; maxId = 386; }
        else if(gen === '4'){ minId = 387; maxId = 494; }
        else if(gen === '5'){ minId = 495; maxId = 649; }
        else if(gen === '6'){ minId = 650; maxId = 721; }
        else if(gen === '7'){ minId = 722; maxId = 809; }
        else if(gen === '8'){ minId = 810; maxId = 905; }
        else if(gen === '9') { minId = 906; maxId = 1010; }
        else throw new error
        const pokes = await pokemonSchema.find({ ID: { $gte: minId, $lte: maxId } }).sort({ ID: 1 }).exec();
        return pokes;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

module.exports = getByGen