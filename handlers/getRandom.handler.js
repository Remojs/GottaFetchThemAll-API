const getRandom = require('../controllers/getRandom.controller')

const getRandomHandler = async (req, res) => {
    try {
        const count = Math.min(parseInt(req.query.count) || 1, 10);
        const pokes = await getRandom(count);
        res.status(200).json(pokes);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = getRandomHandler
