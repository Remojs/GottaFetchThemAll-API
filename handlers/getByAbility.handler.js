const getByAbility = require('../controllers/getByAbility.controller')

const getByAbilityHandler = async(req, res) => {
    try {
        const { ability } = req.params;
        const pokes = await getByAbility(ability)
        res.status(200).json(pokes)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = getByAbilityHandler