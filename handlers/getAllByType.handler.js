const allByType = require('../controllers/getAllByType.controller')

const allByTypeHandler = async(req, res) => {
    try {
        const { type } = req.params;
        const pokes = await allByType(type)
        res.status(200).json(pokes)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = allByTypeHandler