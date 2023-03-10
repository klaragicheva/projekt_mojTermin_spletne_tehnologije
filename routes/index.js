var express = require('express');
var router = express.Router();

router.use("/images", express.static((__dirname, "/public/images")));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/funkcionalnostiOdjemalca', function(req, res, next) {
  res.render('client', { client: 'Funkcionalnosti Odjemalca' });
});

router.get('/posebnostiOdjemalec', function(req, res, next) {
  res.render('featuresClient', { features: 'Posebnosti odjemalec' });
});

router.get('/podatkovniModel', function(req, res, next) {
  res.render('database', { database: 'Podatkovni Model' });
});

router.get('/rest', function(req, res, next) {
  res.render('rest', { rest: 'REST' });
});

router.get('/funkcionalnostiStreznik', function(req, res, next) {
  res.render('server', { client: 'Funkcionalnosti Streznik' });
});

router.get('/posebnostiStreznik', function(req, res, next) {
  res.render('featuresServer', { features: 'Posebnosti streznik' });
});

module.exports = router;
