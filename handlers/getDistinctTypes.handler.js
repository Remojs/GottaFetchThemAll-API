const getDistinctTypes = require('../controllers/getDistinctTypes.controller')

const getDistinctTypesHandler = async (req, res) => {
    try {
        const types = await getDistinctTypes();
        res.status(200).json(types);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = getDistinctTypesHandler
