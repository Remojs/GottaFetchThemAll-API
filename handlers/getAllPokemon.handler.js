const getAllPokemons = require('../controllers/getAllPokemon.controller')

const allPokemonsHandler = async(req, res) => {
    try {
        const query = {};
        if (req.query.first_type) query.first_type = req.query.first_type;
        if (req.query.second_type) query.second_type = req.query.second_type;
        if (req.query.ability) query.ability = req.query.ability;
        
        const allPokes = await getAllPokemons(query)
        res.status(200).json(allPokes)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = allPokemonsHandler