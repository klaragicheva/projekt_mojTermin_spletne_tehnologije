var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var terminSchema = new Schema({
	'datum' : Date,
	'refNum' : String,
	'diagnoza' : String,
	'pacientFK' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'pacient'
	},
	'specialistFK' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'specialist'
	}
});

module.exports = mongoose.model('termin', terminSchema);
