var express = require('express');
var router = express.Router();
var zdravstveniZavodController = require('../controllers/zdravstveniZavodController.js');

/*
 * GET
 */
router.get('/', zdravstveniZavodController.list);

/*
 * GET
 */
router.get('/:id', zdravstveniZavodController.show);

/*
 * POST
 */
router.post('/', zdravstveniZavodController.create);

/*
 * PUT
 */
router.put('/:id', zdravstveniZavodController.update);

/*
 * DELETE
 */
router.delete('/:id', zdravstveniZavodController.remove);

module.exports = router;
