var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var zdravstveniZavodSchema = new Schema({
	'naziv' : String,
	'lokacija' : String
});

module.exports = mongoose.model('zdravstveniZavod', zdravstveniZavodSchema);
