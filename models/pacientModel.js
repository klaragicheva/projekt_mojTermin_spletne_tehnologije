var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var pacientSchema = new Schema({
	'ime' : String,
	'priimek' : String,
	'emso' : Number,
	'spol' : String,
	'starost' : Number
});

module.exports = mongoose.model('pacient', pacientSchema);
