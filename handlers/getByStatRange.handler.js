const getByStatRange = require('../controllers/getByStatRange.controller')

const getByStatRangeHandler = async (req, res) => {
    try {
        const { stat } = req.params;
        const { min, max } = req.query;
        if (min === undefined && max === undefined) {
            return res.status(400).send({ error: 'At least one of min or max query params is required' });
        }
        const pokes = await getByStatRange(stat, min, max);
        res.status(200).json(pokes);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = getByStatRangeHandler
