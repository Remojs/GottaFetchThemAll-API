const express = require("express");
const router = express.Router();
const allPokemonsHandler = require("../handlers/getAllPokemon.handler");
const allByGenHandler = require('../handlers/getAllByGen.handler')
const getByNameHandler = require('../handlers/getByName.handler')
const getByIdHandler = require('../handlers/getById.handler')
const allByTypeHandler = require('../handlers/getAllByType.handler')
const allByMinStatHandler = require('../handlers/getAllByMinStat.handler')
const allByMaxStatHandler = require('../handlers/getAllByMaxStat.handler')
const getAllBetweenHandler = require ('../handlers/getAllBetweenId.handler')
const getByAbilityHandler = require('../handlers/getByAbility.handler')

router.get('/pokedex', allPokemonsHandler)
router.get('/pokedex/between', getAllBetweenHandler)
router.get('/pokedex/gen/:gen', allByGenHandler)
router.get('/pokedex/name/:name', getByNameHandler )
router.get('/pokedex/number/:id', getByIdHandler)
router.get('/pokedex/type/:type', allByTypeHandler )
router.get('/pokedex/stat/min/:stat', allByMinStatHandler)
router.get('/pokedex/stat/max/:stat', allByMaxStatHandler)
router.get('/pokedex/ability/:ability', getByAbilityHandler)

module.exports = router;