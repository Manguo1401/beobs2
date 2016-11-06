var mongoose = require('../dbconfig');

var Schema = mongoose.Schema;
var attrDataSchema = Schema({
	_id: Schema.ObjectId,
    name: String,
    category_id: String
});
  
module.exports = mongoose.model('attrs_datas', attrDataSchema);