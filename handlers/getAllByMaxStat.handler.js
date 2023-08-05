const getAllByMaxStat = require('../controllers/getAllByMaxStat.controller')

const allByMaxStatHandler = async(req, res) => {
    try {
        const { stat } = req.params;
        const pokes = await getAllByMaxStat(stat)
        res.status(200).json(pokes)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = allByMaxStatHandler