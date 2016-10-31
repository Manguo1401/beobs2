var mongoose = require('../dbconfig');

var Schema = mongoose.Schema;
var organismSchema = Schema({
  _id: Schema.ObjectId,
  name: String,
  accr: String,
  desc: String,
  status: String

});

module.exports = mongoose.model('organism', organismSchema);
