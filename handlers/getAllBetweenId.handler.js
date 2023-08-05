const getAllBetween = require('../controllers/getAllBetweenId.controller')

const getAllBetweenHandler = async(req, res) => {
    try {
        const { min, max } = req.query;
        const pokes = await getAllBetween(min, max)
        res.status(200).json(pokes)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = getAllBetweenHandler