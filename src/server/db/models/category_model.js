var mongoose = require('../dbconfig');

var Schema = mongoose.Schema;
var categorieSchema = Schema({
	_id: Schema.ObjectId,
    name: String
});
  
module.exports = mongoose.model('attrs_data_cats', categorieSchema);