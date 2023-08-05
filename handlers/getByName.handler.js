const getAllPokemons = require('../controllers/getByName.controller')

const getByNameHandler = async(req, res) => {
    try {
        const { name } = req.params;
        const pokes = await getAllPokemons(name)
        res.status(200).json(pokes)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = getByNameHandler 