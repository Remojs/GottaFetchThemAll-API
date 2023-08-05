const getById = require('../controllers/getById.controller')

const getByIdHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const pokes = await getById(id)
        res.status(200).json(pokes)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = getByIdHandler 