const getAllPokemons = require('../controllers/getAllPokemon.controller')

const allPokemonsHandler = async(req, res) => {
    try {
        const query = {};
        if (req.query.first_type) query.first_type = req.query.first_type;
        if (req.query.second_type) query.second_type = req.query.second_type;
        if (req.query.ability) query.ability = req.query.ability;

        const page = parseInt(req.query.page) || 1;
        const limit = Math.min(parseInt(req.query.limit) || 100, 200);

        const result = await getAllPokemons(query, page, limit);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

module.exports = allPokemonsHandler