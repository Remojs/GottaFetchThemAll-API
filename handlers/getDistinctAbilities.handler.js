const getDistinctAbilities = require('../controllers/getDistinctAbilities.controller')

const getDistinctAbilitiesHandler = async (req, res) => {
    try {
        const abilities = await getDistinctAbilities();
        res.status(200).json(abilities);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = getDistinctAbilitiesHandler
