var mongoose = require('../dbconfig');

var Schema = mongoose.Schema;
var listElemSchema = Schema({
  _id: Schema.ObjectId,
    listname: String,
    list: [{value:String}],
});

module.exports = mongoose.model('list_elem', listElemSchema);
