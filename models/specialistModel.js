var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var specialistSchema = new Schema({
	'ime' : String,
	'priimek' : String,
	'email' : String,
	'password' : String,
	'poklic' : String,
	'zdravstveniZavodFK' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'zdravstveniZavod'
	}
});

module.exports = mongoose.model('specialist', specialistSchema);
