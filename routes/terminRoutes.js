var express = require('express');
var router = express.Router();
var terminController = require('../controllers/terminController.js');

/*
 * GET
 */
router.get('/', terminController.list);

/*
 * GET
 */
router.get('/:id', terminController.show);

/*
 * POST
 */
router.post('/', terminController.create);

/*
 * PUT
 */
router.put('/:id', terminController.update);

/*
 * DELETE
 */
router.delete('/:id', terminController.remove);

module.exports = router;
