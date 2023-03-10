var express = require('express');
var router = express.Router();
var pacientController = require('../controllers/pacientController.js');

router.get('/', pacientController.list);
router.get('/:id', pacientController.show);
router.get('/:name', pacientController.showByName);
router.get('/:surname', pacientController.showBySurname);
router.get('/:emso', pacientController.showByEmso);
router.get('/:refNum', pacientController.showByRefNum);

router.post('/', pacientController.create);
//router.post('/addToList', pacientController.create);

router.put('/:id', pacientController.update);

router.delete('/:id', pacientController.remove);
//router.delete('deletePacientByTermin/:id/:termin', pacientController.remove);

module.exports = router;
