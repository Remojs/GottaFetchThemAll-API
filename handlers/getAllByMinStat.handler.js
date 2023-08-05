const getAllByMinStat = require('../controllers/getAllByMinStat.controller')

const allByMinStatHandler = async(req, res) => {
    try {
        const { stat } = req.params;
        const pokes = await getAllByMinStat(stat)
        res.status(200).json(pokes)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = allByMinStatHandler