var express = require('express');
var router = express.Router();
var specialistController = require('../controllers/specialistController.js');

router.get('/', specialistController.list);
router.get('/:id', specialistController.show);
router.get('/:name', specialistController.showByName);
router.get('/:surname', specialistController.showBySurname);
router.get('/:poklic', specialistController.showByPoklic);
router.get('/:zdravstveniZavodId', specialistController.showAllByZZ);

router.post('/', specialistController.create);

router.put('/:id', specialistController.update);

router.delete('/:id', specialistController.remove);

module.exports = router;
