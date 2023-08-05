const getByGen = require('../controllers/getAllByGen.controller')

const allByGenHandler = async(req, res) => {
    try {
        const { gen } = req.params;
        const pokes = await getByGen(gen)
        res.status(200).json(pokes)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = allByGenHandler