var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/funkcionalnostiOdjemalca', function(req, res, next) {
  res.render('client', { client: 'Funkcionalnosti Odjemalca' });
});

router.get('/posebnosti', function(req, res, next) {
  res.render('features', { features: 'Posebnosti' });
});

router.get('/podatkovniModel', function(req, res, next) {
  res.render('database', { database: 'Podatkovni Model' });
});

router.get('/rest', function(req, res, next) {
  res.render('rest', { rest: 'REST' });
});

module.exports = router;
