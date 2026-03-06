const getByDualType = require('../controllers/getByDualType.controller')

const getByDualTypeHandler = async (req, res) => {
    try {
        const { first, second } = req.params;
        const pokes = await getByDualType(first, second);
        res.status(200).json(pokes);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = getByDualTypeHandler
